import { Module } from '@nestjs/common';
import { MushroomService } from './domain/mushroom/mushroom.service';
import { MushroomController } from './infrastructure/controllers/mushroom/mushroom.controller';

import { MushroomRepository } from './infrastructure/persitence/repositories/mushroom.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { MushroomSchema } from './infrastructure/persitence/schemas/mushroom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mushroom', schema: MushroomSchema }]),
  ],
  controllers: [MushroomController],
  providers: [MushroomService, MushroomRepository],
})
export class MushroomModule {}
