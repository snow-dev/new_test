import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { commands } from '../../persitence/cqrs';
import { SolkosDto } from '../../../application/dtos/solkos.dto';
import { CommandBus } from '@nestjs/cqrs';
import { SolkosModel } from '../../persitence/models/solkos.model';

@Controller('solkos')
export class SolkosController {
  constructor(private commandBus: CommandBus) {}

  @Get()
  async getEntries(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: SolkosDto,
  ): Promise<SolkosModel[]> {
    console.log('query', query);
    const requestedBy = 'test';
    const clientsArry =
      query.clients && query.clients.length > 0 ? query.clients.split(',') : [];
    const zonesArray =
      query.zones && query.zones.length > 0 ? query.zones.split(',') : [];
    const regionsArray =
      query.regions && query.regions.length > 0 ? query.regions.split(',') : [];
    const operativeUnitsArray =
      query.operativeUnits && query.operativeUnits.length > 0
        ? query.operativeUnits.split(',')
        : [];

    try {
      const command = new commands.solkosCommand(
        requestedBy,
        query.year,
        clientsArry,
        zonesArray,
        operativeUnitsArray,
        regionsArray,
        query.distribuidor,
      );

      console.log('command', this.commandBus);

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
