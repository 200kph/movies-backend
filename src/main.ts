import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const corsOptions = {
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    preflightContinue: true,
    allowedHeaders: 'client,content-type,token-type,Authorization,access_token,uid',
    exposedHeaders: 'Authorization,uid',
    origin(origin, callback) {
      callback(null, true);
    },
    credentials: true,
  };

  app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));
  app.use(cors(corsOptions));

  app.use('/api', express.static(join(__dirname.replace('src', 'dist') + '/api/')));

  const port = process.env.PORT || 3000;
  await app.listen(port);


}
bootstrap();
