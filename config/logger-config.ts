import * as winston from 'winston';

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

export const logger = winston.createLogger({
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.simple(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
  ),
  transports: [
    new winston.transports.File({
      filename: 'logs/http.log',
      level: 'warn',
      format: winston.format.combine(
        winston.format.timestamp({
          format: (new Date(), 'dddd MMMM Do YYYY HH:mm:ss'),
        }),

        winston.format.printf(
          ({ timestamp, message, request, response }) =>
            `\n\n[${timestamp}]\n\t-${message}\n\t\t--REQUEST-- ${JSON.stringify(
              request,
              null,
              15,
            )}\n\t\t--RESPONSE-- ${JSON.stringify(response, null, 15)}`,
        ),
      ),
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp({
          format: (new Date(), 'dddd MMMM Do YYYY HH:mm:ss'),
        }),
        winston.format.printf(
          ({ timestamp, message }) => `${timestamp} ${message}`,
        ),
      ),
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: winston.format.combine(
        winston.format.timestamp({
          format: (new Date(), 'dddd MMMM Do YYYY HH:mm:ss'),
        }),
        winston.format.printf(
          ({ timestamp, message }) => `${timestamp} ${message}`,
        ),
      ),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: 'logs/exceptions.log',
      format: winston.format.combine(
        winston.format.timestamp({
          format: (new Date(), 'dddd MMMM Do YYYY HH:mm:ss'),
        }),
        winston.format.printf(
          ({ timestamp, message }) => `${timestamp} ${message}`,
        ),
      ),
    }),
  ],
});

if (process.env.ENVIRONMENT === 'development') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
    }),
  );
}
