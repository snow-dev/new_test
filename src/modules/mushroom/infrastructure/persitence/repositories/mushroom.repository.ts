import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Mushroom, MushroomDocument } from '../schemas/mushroom.schema';

@Injectable()
export class MushroomRepository {
  constructor(
    @InjectModel(Mushroom.name) private mushroomModel: Model<MushroomDocument>,
  ) {}

  async create(mushRoomDto: Mushroom): Promise<Mushroom> {
    const createdMushroom = new this.mushroomModel(mushRoomDto);
    return createdMushroom.save();
  }

  async findAll(): Promise<Mushroom[]> {
    return this.mushroomModel.find().exec();
  }

  async findById(id: string): Promise<Mushroom> {
    return this.mushroomModel.findById(id).exec();
  }
}
