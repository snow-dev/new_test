import { Mushroom } from '../infrastructure/persitence/schemas/mushroom.schema';
import { GenericAbstractRepository } from '../../generic-repository/domain/generic-repository/generic-abstract-repository';

export type MushroomRepositoryInterface = GenericAbstractRepository<Mushroom>;
