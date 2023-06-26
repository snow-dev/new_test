import { Inject, Injectable } from '@nestjs/common';
import { Mushroom } from '../../infrastructure/persitence/schemas/mushroom.schema';
import { MushroomDto } from '../../application/dtos/mushroom.dto';
import { MushroomRepositoryInterface } from '../../application/mushroom.repository.interface';
@Injectable()
export class MushroomService {
  constructor(
    @Inject('MushroomRepositoryInterface')
    private readonly mushroomRepository: MushroomRepositoryInterface,
  ) {}

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
      return await this.mushroomRepository.findById(parseInt(id, 10));
    } catch (err) {
      throw err;
    }
  }
}
