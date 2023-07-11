import { Module } from '@nestjs/common';
import { MushroomService } from './domain/mushroom/mushroom.service';
import { MushroomController } from './infrastructure/controllers/mushroom/mushroom.controller';

import { MushroomRepository } from './infrastructure/persitence/repositories/mushroom.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { MushroomSchema } from './infrastructure/persitence/schemas/mushroom.schema';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { SolkosController } from './infrastructure/controllers/mushroom/solkos.controller';
import { handlers } from './infrastructure/persitence/cqrs';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    CqrsModule,
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Mushroom', schema: MushroomSchema }]),
  ],
  controllers: [MushroomController, SolkosController],
  providers: [
    ...handlers,
    ConfigService,
    MushroomService,
    MushroomRepository,
    CommandBus,
    QueryBus,
  ],
})
export class MushroomModule {}
