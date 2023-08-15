import { logger } from 'config/logger-config';

import { LoggerService } from '@nestjs/common';

export class CustomLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any) {
    logger.log('info', message);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    logger.error(message, optionalParams);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    logger.warn(message, optionalParams);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    logger.debug(message, optionalParams);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    logger.verbose(message);
  }
}
