import {
  Handler as solkosHandler,
  Command as solkosCommand,
} from './solkos.command.handlers';

const commands = { solkosCommand };

const handlers = [solkosHandler];

export { commands, handlers };
