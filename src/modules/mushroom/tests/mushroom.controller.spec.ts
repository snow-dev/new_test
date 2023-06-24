import { Test, TestingModule } from '@nestjs/testing';
import { MushroomController } from '../infrastructure/controllers/mushroom/mushroom.controller';
import { createMock } from '@golevelup/ts-jest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, Model } from 'mongoose';
import {
  Mushroom,
  MushroomSchema,
} from '../infrastructure/persitence/schemas/mushroom.schema';
import { MushroomService } from '../domain/mushroom/mushroom.service';
import { getModelToken } from '@nestjs/mongoose';
import { fakeMushroom } from '../../../fakes.mushroom';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('MushroomController', () => {
  let mushroomController: MushroomController;

  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let mushroomModel: Model<Mushroom>;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    mushroomModel = mongoConnection.model(Mushroom.name, MushroomSchema);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MushroomController],
      providers: [
        MushroomService,
        {
          provide: getModelToken(Mushroom.name),
          useValue: mushroomModel,
        },
      ],
    })
      .useMocker(() => createMock())
      .compile();

    mushroomController = module.get<MushroomController>(MushroomController);
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  it('should be defined', () => {
    expect(mushroomController).toBeDefined();
  });

  describe('Mushroom', () => {
    it('should return saved mushroom', async () => {
      const mushroomFake = fakeMushroom();

      jest.spyOn(mushroomController, 'create').mockResolvedValue(mushroomFake);

      const createsMushroom = await mushroomController.create(mushroomFake);
      expect(createsMushroom.name).toBe(mushroomFake.name);
    });

    it('should return all mushrooms', async () => {
      const mushroomFake = fakeMushroom();

      jest
        .spyOn(mushroomController, 'findAll')
        .mockResolvedValue([mushroomFake]);

      await mushroomController.create(mushroomFake);

      const mushrooms = await mushroomController.findAll();
      expect(mushrooms.length).toEqual(1);
    });

    it('should return MushroomAlreadyExists (Bad Request - 404) exception', async () => {
      const mushroomFake = fakeMushroom();

      await new mushroomModel(mushroomFake).save();

      const exception = new HttpException(
        {
          message: 'MushroomAlreadyExists',
        },
        HttpStatus.BAD_REQUEST,
      );
      jest.spyOn(mushroomController, 'create').mockRejectedValue(exception);

      await expect(mushroomController.create(mushroomFake)).rejects.toThrow(
        exception,
      );
    });
  });
});
