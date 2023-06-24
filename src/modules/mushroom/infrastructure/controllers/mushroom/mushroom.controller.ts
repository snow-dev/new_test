import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MushroomService } from '../../../domain/mushroom/mushroom.service';
import { MushroomDto } from '../../../application/dtos/mushroom.dto';
import { Mushroom } from '../../persitence/schemas/mushroom.schema';

@Controller('mushroom')
export class MushroomController {
  constructor(private readonly mushroomService: MushroomService) {}

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
    return this.mushroomService.findById(id);
  }
}
