import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MushroomService } from '../../../domain/mushroom/mushroom.service';
import { MushroomDto } from '../../../application/dtos/mushroom.dto';
import { Mushroom } from '../../persitence/schemas/mushroom.schema';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetMushroomQuery } from '../../persitence/cqrs/CreateMushroomCommandHandler';

@Controller('mushroom')
export class MushroomController {
  constructor(
    private readonly mushroomService: MushroomService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() mushRoomDto: MushroomDto): Promise<Mushroom> {
    return await this.mushroomService.create(mushRoomDto);
  }

  @Get()
  async findAll(): Promise<Mushroom[]> {
    return this.mushroomService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Mushroom> {
    // return this.mushroomService.findById(id);
    return this.queryBus.execute(new GetMushroomQuery(true));
  }
}
