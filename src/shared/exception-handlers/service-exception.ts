import { logger } from 'config/logger-config';

import { _CONSTANTS } from '../app-constants';
import { ErrorMessage } from '../static-data/client-message';

export class SVException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, SVException.prototype);
  }

  name = 'SVException';
}

export class SException extends Error {
  code: number;
  message: string;
  constructor(error: SVException | Error) {
    super();
    Object.setPrototypeOf(this, SException.prototype);
    this.code =
      error instanceof SVException
        ? _CONSTANTS.RESPONSE_CODE.SERVICE_VALIDATION_ERROR
        : _CONSTANTS.RESPONSE_CODE.SERVICE_ERROR;
    this.message =
      error instanceof SVException ? error.message : ErrorMessage.SERVICE_ERROR;
    if (error.stack) {
      logger.error(error.message, error.stack);
    }
  }
  name = 'SException';
}
