import * as compression from 'compression';
import { CONFIG } from 'config/config-dto';
import helmet from 'helmet';
import { _CONSTANTS } from 'src/shared/app-constants';

import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const validationConfig = (app: INestApplication) =>
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    errorHttpStatusCode: _CONSTANTS.RESPONSE_CODE.DATA_VALIDATION_ERROR,
    disableErrorMessages:
      app.get(ConfigService).get(CONFIG.DETAILED_VALIDATION_MESSAGE) != 'true',
  });

export const applyRootMiddlewares = (app: INestApplication) => {
  app.use(compression());
  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(validationConfig(app));
};
