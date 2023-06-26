export interface GenericInterfaceRepository<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
}
