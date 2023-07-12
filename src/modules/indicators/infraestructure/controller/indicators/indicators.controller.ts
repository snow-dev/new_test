import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetOrdersCommand } from '../../persistence/cqrs/indicatorsCommand';

@Controller('orders')
export class IndicatorsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getOrders(): Promise<any> {
    console.log('getOrders');
    return await this.queryBus.execute(new GetOrdersCommand());
  }
  catch(error) {
    console.error('error', error);
    throw new HttpException(
      { message: error.message },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
