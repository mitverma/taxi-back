import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { rootConfig } from '../config/root-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpInterceptor } from './interceptors/http.interceptor';
import { coreModules } from './modules';

@Module({
  imports: [...rootConfig, ...coreModules],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
