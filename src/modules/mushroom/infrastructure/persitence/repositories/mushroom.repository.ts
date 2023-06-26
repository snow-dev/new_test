import { Injectable } from '@nestjs/common';
import { Mushroom } from '../schemas/mushroom.schema';
import { GenericAbstractRepository } from '../../../../generic-repository/domain/generic-repository/generic-abstract-repository';
import { MushroomRepositoryInterface } from '../../../application/mushroom.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MushroomRepository
  extends GenericAbstractRepository<Mushroom>
  implements MushroomRepositoryInterface
{
  constructor(
    @InjectRepository(Mushroom)
    private readonly mushroomRepository: Repository<Mushroom>,
  ) {
    super(mushroomRepository);
  }
}
