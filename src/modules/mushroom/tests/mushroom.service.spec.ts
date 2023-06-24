import { Test, TestingModule } from '@nestjs/testing';
import { MushroomService } from '../domain/mushroom/mushroom.service';
import { createMock } from '@golevelup/ts-jest';

describe('MushroomService', () => {
  let service: MushroomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MushroomService],
    })
      .useMocker(() => createMock())
      .compile();

    service = module.get<MushroomService>(MushroomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
