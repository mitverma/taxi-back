import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';

import { CONFIG } from './config-dto';
import envVarsConfig from './env-vars-config';


export const rootConfig = [
  ConfigModule.forRoot({ isGlobal: true, load: [envVarsConfig], cache: true }),
  ThrottlerModule.forRoot({ ttl: 60, limit: 20 }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => ({
      // uri: config.get(CONFIG.DB_CONNECTION_STRING),
      // uri: CONFIG.DB_CONNECTION_STRING,
      uri: 'mongodb+srv://amitwohlig:Zoro@9594@cluster0.si5nno7.mongodb.net/',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    inject: [ConfigService],
  }),
];
