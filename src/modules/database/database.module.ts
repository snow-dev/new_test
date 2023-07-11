import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolkosSchemaEntity } from '../mushroom/infrastructure/persitence/schemas/solkos.schema';

@Module({
  imports: [TypeOrmModule.forFeature([SolkosSchemaEntity])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
