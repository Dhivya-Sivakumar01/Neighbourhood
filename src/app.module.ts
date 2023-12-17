import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Apartment } from 'models/apartment.model';
import { MessagesModule } from './messages/messages.module';
import { Messages } from 'models/messages.model';
import { Residents } from 'models/residents.model';
import * as config from 'config/config.json';
import { Dialect } from 'sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'neighbourhood',
      models: [Apartment,Messages,Residents]
    }),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
dialect: config.development.dialect as Dialect,
host: config.development.host as string,
port: config.development.port as number,
username: config.development.username as string,
password: config.development.password as string,
database: config.development.database as string,
*/
