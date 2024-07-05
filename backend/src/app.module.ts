import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApartmentModule } from './apartment/apartment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DBHOST,
      port: +process.env.DBPORT,
      username: process.env.DBUSERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.DBNAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ApartmentModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
