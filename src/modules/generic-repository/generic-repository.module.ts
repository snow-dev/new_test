import { Module } from '@nestjs/common';
import { GenericAbstractRepository } from './domain/generic-repository/generic-abstract-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mushroom } from '../mushroom/infrastructure/persitence/schemas/mushroom.schema';

@Module({
  exports: [GenericAbstractRepository],
  imports: [TypeOrmModule.forFeature([Mushroom])],
})
export class GenericRepositoryModule {}
