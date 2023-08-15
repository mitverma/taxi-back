import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface InjectSwaggerProps {
  app: INestApplication;
  active?: boolean;
}

const swaggerConfig = {
  title: 'Intercity Backend',
};

export const injectSwagger = (
  { app, active = true }: InjectSwaggerProps,
  modules,
) => {
  if (active) {
    const config = new DocumentBuilder()
      .setTitle(swaggerConfig.title)
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      include: modules,
    });
    SwaggerModule.setup('api', app, document);
  }
};
