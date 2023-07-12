import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OrdersModel } from '../models/orders.model';
import { getCustomRepository } from 'typeorm';
import { OrderRepository } from '../repositories/order.repository';

export class IndicatorsCommand {
  constructor(
    public readonly PorcentajeEmbarcado: number,
    public readonly PorcentajeFacturado: number,
    public readonly OrdenCompra: string,
    public readonly Mr: string,
    public readonly Pedido: string,
    public readonly OrgVenta: string,
    public readonly Estatus: string,
    public readonly FechaOc: string,
    public readonly Nocte: string,
    public readonly Cliente: string,
    public readonly NocteDestino: string,
    public readonly ClienteDestino: string,
    public readonly Zona: string,
    public readonly RegionCte: string,
    public readonly UOperativa: string,
    public readonly CantidadPedido: number,
    public readonly MontoLocal: number,
    public readonly CantidadFacturada: number,
    public readonly MontoFacturado: number,
    public readonly AttachementCount: number,
  ) {}
}

@CommandHandler(IndicatorsCommand)
export class IndicatorsHandler implements ICommandHandler<IndicatorsCommand> {
  private orderRepository: OrderRepository;
  async execute(command: IndicatorsCommand): Promise<OrdersModel[]> {
    this._initializeRepositories();

    const order = {
      porcentajeEmbarcado: command.PorcentajeEmbarcado,
      porcentajeFacturado: command.PorcentajeFacturado,
      ordenCompra: command.OrdenCompra,
      mr: command.Mr,
      pedido: command.Pedido,
      orgVenta: command.OrgVenta,
      estatus: command.Estatus,
      fechaOc: command.FechaOc,
      nocte: command.Nocte,
      cliente: command.Cliente,
      nocteDestino: command.NocteDestino,
      clienteDestino: command.ClienteDestino,
      zona: command.Zona,
      regionCte: command.RegionCte,
      uOperativa: command.UOperativa,
      cantidadPedido: command.CantidadPedido,
      montoLocal: command.MontoLocal,
      cantidadFacturada: command.CantidadFacturada,
      montoFacturado: command.MontoFacturado,
      attachementCount: command.AttachementCount,
    };

    console.log('order: ', order);

    const orders = await this.orderRepository.getOrders();

    console.log('Orders: ', orders);

    return orders;
  }

  _initializeRepositories() {
    this.orderRepository = getCustomRepository(OrderRepository);
  }
}
