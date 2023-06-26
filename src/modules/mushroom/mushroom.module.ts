import { Module } from '@nestjs/common';
import { MushroomService } from './domain/mushroom/mushroom.service';
import { MushroomController } from './infrastructure/controllers/mushroom/mushroom.controller';
import { Mushroom } from './infrastructure/persitence/schemas/mushroom.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MushroomRepository } from './infrastructure/persitence/repositories/mushroom.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Mushroom])],
  controllers: [MushroomController],
  providers: [
    MushroomService,
    {
      provide: 'MushroomRepositoryInterface',
      useClass: MushroomRepository,
    },
  ],
})
export class MushroomModule {}
