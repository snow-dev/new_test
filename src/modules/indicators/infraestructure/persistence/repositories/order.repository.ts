import { EntityRepository, Repository } from 'typeorm';
import { OrdersModel } from '../models/orders.model';

@EntityRepository(OrdersModel)
export class OrderRepository extends Repository<OrdersModel> {
  async getOrders(): Promise<OrdersModel[]> {
    const query = this.createQueryBuilder('orders');
    // query = query.where('orders.pedido = :pedido', {
    //   pedido: '7250042444',
    // });

    const result = await query.getMany();

    console.log('result: ', result);
    return result;
  }
}
