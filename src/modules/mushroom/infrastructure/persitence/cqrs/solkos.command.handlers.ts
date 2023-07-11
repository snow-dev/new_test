import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SolkosRepository } from '../repositories/solkos.repository';
import { SolkosModel } from '../models/solkos.model';
import { getCustomRepository } from 'typeorm';

export class Command {
  constructor(
    public readonly RequestedBy: string,
    public readonly Year: number,
    public readonly ClienteCodes: string[],
    public readonly Zones: string[],
    public readonly Regions: string[],
    public readonly OperativeUnits: string[],
    public readonly Distribuidor: string,
  ) {}
}

@CommandHandler(Command)
export class Handler implements ICommandHandler<Command> {
  private solkosRepository: SolkosRepository;

  async execute(command: Command): Promise<SolkosModel[]> {
    this._initializeRepositories();

    const entrie = {
      requestedBy: command.RequestedBy,
      year: command.Year,
      clientCodes: command.ClienteCodes,
      zones: command.Zones,
      regions: command.Regions,
      operativeUnits: command.OperativeUnits,
      distribuidor: command.Distribuidor,
    };

    console.log('entrie: ', entrie);

    const solkosEntries = await this.solkosRepository.getEntries(entrie);

    return Promise.resolve(solkosEntries);
  }

  _initializeRepositories() {
    this.solkosRepository = getCustomRepository(SolkosRepository);
  }
}
