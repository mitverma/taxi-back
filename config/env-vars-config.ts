import { CONFIG } from './config-dto';

export default () => ({
  [CONFIG.PORT]: parseInt(process.env.PORT, 10) || 3000,
  [CONFIG.DB_CONNECTION_STRING]: process.env.DB_CONNECTION_STRING,
  [CONFIG.SWAGGER]: process.env.ENABLE_SWAGGER,
  [CONFIG.DETAILED_VALIDATION_MESSAGE]: process.env.DETAILED_VALIDATION_MESSAGE,
  [CONFIG.ENVIRONMENT]: process.env.ENVIRONMENT,
});
