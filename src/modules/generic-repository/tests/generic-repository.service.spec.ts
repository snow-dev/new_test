import { Test, TestingModule } from '@nestjs/testing';
import { GenericRepositoryService } from '../domain/generic-repository/generic-repository.service';
import { Mushroom } from '../../mushroom/infrastructure/persitence/schemas/mushroom.schema';
import { MushroomService } from '../../mushroom/domain/mushroom/mushroom.service';
import { MushroomDto } from '../../mushroom/application/dtos/mushroom.dto';
import { createMock } from '@golevelup/ts-jest';

describe('GenericRepositoryService', () => {
  let mushroomService: MushroomService;
  let genericRepository: GenericRepositoryService<Mushroom>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MushroomService,
        {
          provide: GenericRepositoryService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    })
      .useMocker(() => createMock())
      .compile();

    mushroomService = module.get<MushroomService>(GenericRepositoryService);
    genericRepository = module.get<GenericRepositoryService<Mushroom>>(
      GenericRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(mushroomService).toBeDefined();
  });

  describe('findById', function () {
    it('should call findById method of GenericRepository with the provided ID', async () => {
      const id = '1234567890';
      const mockMushroom = {
        id,
        name: 'Button mushroom',
        edible: false,
        species: 'unknow',
      } as MushroomDto;

      jest.spyOn(genericRepository, 'findById').mockResolvedValue(mockMushroom);

      const result = await mushroomService.findById(id);
      expect(genericRepository.findById).toHaveBeenCalled();
      expect(result).toEqual(mockMushroom);
    });
  });

  describe('create', function () {
    it('should call create method  of GenericRepository', async () => {
      const mushroomFake = {
        name: 'Button mushroom',
        edible: false,
        species: 'unknow',
      } as MushroomDto;

      jest.spyOn(genericRepository, 'create').mockResolvedValue(mushroomFake);

      const result = await mushroomService.create(mushroomFake);
      expect(genericRepository.create).toHaveBeenCalled();
      expect(result).toEqual(mushroomFake);
    });
  });
});
