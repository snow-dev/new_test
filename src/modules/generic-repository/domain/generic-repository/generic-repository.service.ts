import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class GenericRepositoryService<Schema> {
  constructor(private readonly model: Model<Schema>) {}

  /**
   * Find item by ID
   * @param id: string
   *
   * @return Promise<Schema> - Given schema type
   */
  async findById(id: string): Promise<Schema> {
    return this.model.findById(id).exec();
  }

  /**
   * Create new item
   * @param data: Schema
   *
   * @returns Promise<Schema>
   */
  async create(data: Schema): Promise<Schema> {
    const newItem = new this.model(data);
    return newItem.save();
  }

  async update(id: string, data: Schema): Promise<Schema> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<Schema> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
