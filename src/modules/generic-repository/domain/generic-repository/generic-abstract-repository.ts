import { GenericInterfaceRepository } from '../../application/generic.interface.repository';
import { Repository } from 'typeorm';

export abstract class GenericAbstractRepository<T>
  implements GenericInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  /**
   * Create new item
   * @param data: Schema
   *
   * @returns Promise<Schema>
   */
  async create(data: T | any): Promise<T> {
    return await this.entity.save(data);
  }

  /**
   * Find item by ID
   * @param id: string
   *
   * @return Promise<Schema> - Given schema type
   */
  async findById(id: number): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.entity.findOne(id);
  }

  /**
   * Find all items
   * @returns Promise<Schema[]>
   */
  async findAll(): Promise<T[]> {
    console.log('this.entity', this.entity);

    return await this.entity.find();
  }
}
