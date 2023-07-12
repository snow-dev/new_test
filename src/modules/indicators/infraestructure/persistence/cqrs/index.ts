import { GetOrdersQueryHandler, IndicatorsHandler } from './indicatorsCommand';
import { IndicatorsCommand } from './indicatorsCommand';

export const indicatorsCommandHandlers = [IndicatorsHandler];
export const commands = { IndicatorsCommand };
export const indicatorsQueryHandlers = [GetOrdersQueryHandler];
