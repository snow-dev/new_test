import { Injectable } from '@nestjs/common';
import { Mushroom } from '../../infrastructure/persitence/schemas/mushroom.schema';
import { MushroomDto } from '../../application/dtos/mushroom.dto';
import { MushroomRepository } from '../../infrastructure/persitence/repositories/mushroom.repository';

@Injectable()
export class MushroomService {
  constructor(private readonly mushroomRepository: MushroomRepository) {}

  async create(mushRoomDto: MushroomDto): Promise<Mushroom> {
    try {
      return this.mushroomRepository.create(mushRoomDto);
    } catch (err) {
      throw err;
    }
  }

  async findAll(): Promise<Mushroom[]> {
    try {
      return this.mushroomRepository.findAll();
    } catch (err) {
      throw err;
    }
  }

  async findById(id: string): Promise<Mushroom> {
    try {
      return await this.mushroomRepository.findById(id);
    } catch (err) {
      throw err;
    }
  }
}
