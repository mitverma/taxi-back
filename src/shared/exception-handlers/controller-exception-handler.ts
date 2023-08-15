import { Response } from 'express';

import { HttpStatus } from '@nestjs/common';

import { SException } from './service-exception';
import { logger } from 'config/logger-config';

export const SEND_OK = (
  { message = null, data = null }: { message: string; data: unknown },
  res: Response,
) => {
  return res
    .status(HttpStatus.OK)
    .json({ message, data, statusCode: HttpStatus.OK });
};

export const SEND_ERROR = (error: SException, res: Response) => {
  return res.status(error.code).json({
    message: error.message,
    data: null,
    statusCode: error.code,
  });
};
