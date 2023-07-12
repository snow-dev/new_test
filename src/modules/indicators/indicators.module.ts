import { Module } from '@nestjs/common';
import { IndicatorsController } from './infraestructure/controller/indicators/indicators.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from '../database/database.module';
import {
  indicatorsCommandHandlers,
  indicatorsQueryHandlers,
} from './infraestructure/persistence/cqrs';
import { ConfigService } from '@nestjs/config';
import { OrderRepository } from './infraestructure/persistence/repositories/order.repository';

@Module({
  controllers: [IndicatorsController],
  imports: [CqrsModule, DatabaseModule],
  providers: [
    ...indicatorsCommandHandlers,
    ...indicatorsQueryHandlers,
    ConfigService,
    OrderRepository,
  ],
})
export class IndicatorsModule {}
