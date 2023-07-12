import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { commands } from '../../persistence/cqrs';

@Controller('orders')
export class IndicatorsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  async getOrders(): Promise<any> {
    console.log('getOrders');
    try {
      const command = new commands.IndicatorsCommand(
        1,
        2,
        'OrdenCompra',
        'Mr',
        'Pedido',
        'OrgVenta',
        'Estatus',
        'FechaOc',
        'Nocte',
        'Cliente',
        'NocteDestino',
        'ClienteDestino',
        'Zona',
        'RegionCte',
        'UOperativa',
        2,
        3,
        6,
        2,
        6,
      );

      return await this.commandBus.execute(command);
    } catch (error) {
      console.error('error', error);
      throw new HttpException(
        { message: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
