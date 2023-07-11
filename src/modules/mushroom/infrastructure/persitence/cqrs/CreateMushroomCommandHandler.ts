import {
  CommandHandler,
  ICommandHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MushroomEntity } from '../entities/mushroom.entity';

export class CreateMushroomCommand {}

@CommandHandler(CreateMushroomCommand) // <1>
export class CreateMushroomCommandHandler
  implements ICommandHandler<CreateMushroomCommand>
{
  constructor(
    @InjectRepository(MushroomEntity)
    private readonly mushroomRepository: Repository<MushroomEntity>, // private readonly eventBuss: EventBus,
  ) {}

  async execute(command: CreateMushroomCommand) {
    const mushroom = new MushroomEntity();
    mushroom.name = 'New mushroom';
    mushroom.species = 'Unidentified';
    mushroom.edible = false;

    await this.mushroomRepository.save(mushroom);

    return mushroom;

    // await this.eventBuss.publisher(new MushroomCreatedEvent(mushroom));
  }
}

export class GetMushroomQuery {
  constructor(public readonly isEdible?: boolean) {}
}

@QueryHandler(GetMushroomQuery)
export class GetMushroomQueryHandler
  implements IQueryHandler<GetMushroomQuery>
{
  constructor(
    @InjectRepository(MushroomEntity)
    private readonly mushroomRepositiry: Repository<MushroomEntity>,
  ) {}

  async execute({ isEdible }: GetMushroomQuery) {
    return await this.mushroomRepositiry.find({ edible: isEdible });
  }
}
