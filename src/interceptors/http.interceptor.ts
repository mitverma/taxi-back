import { logger } from 'config/logger-config';
import { Observable } from 'rxjs';

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

export class HttpInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request: Request = context.getArgByIndex(0);
    const response: Response = context.getArgByIndex(1);
    const { body: resBody } = response;
    const { method, body, url } = request;

    logger.warn(`${method}   ${url}`, { request: body, response: resBody });

    return next.handle();
  }
}
