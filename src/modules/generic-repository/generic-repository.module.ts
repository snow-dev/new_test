import { Module } from '@nestjs/common';
import { GenericRepositoryService } from './domain/generic-repository/generic-repository.service';

@Module({
  imports: [GenericRepositoryService],
  exports: [GenericRepositoryService],
})
export class GenericRepositoryModule {}
