import { Module } from '@nestjs/common';
import { MushroomService } from './domain/mushroom/mushroom.service';
import { MushroomController } from './infrastructure/controllers/mushroom/mushroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Mushroom,
  MushroomSchema,
} from './infrastructure/persitence/schemas/mushroom.schema';
import { MushroomRepository } from './infrastructure/persitence/repositories/mushroom.repository';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Mushroom.name,
        useFactory: () => {
          const schema = MushroomSchema;
          schema.pre('save', function () {
            console.log('pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [MushroomController],
  providers: [MushroomService, MushroomRepository],
})
export class MushroomModule {}
