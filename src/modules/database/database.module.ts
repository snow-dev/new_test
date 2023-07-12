import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolkosSchemaEntity } from '../mushroom/infrastructure/persitence/schemas/solkos.schema';
import { OrdersSchemaEntity } from '../indicators/infraestructure/persistence/schemas/orders.schema';

@Module({
  imports: [TypeOrmModule.forFeature([SolkosSchemaEntity, OrdersSchemaEntity])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
