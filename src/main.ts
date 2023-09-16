import { CONFIG } from 'config/config-dto';
import { injectSwagger } from 'config/swagger-config';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { applyRootMiddlewares } from './middlewares/root-middleware';
import { coreModules } from './modules';
import { CustomLogger } from './services/CustomLogger';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   logger: new CustomLogger(),
  // });
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  applyRootMiddlewares(app);
  injectSwagger(
    { app, active: configService.get(CONFIG.SWAGGER) === 'true' },
    coreModules,
  );

  await app.listen(configService.get(CONFIG.PORT));
}
bootstrap();
