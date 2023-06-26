import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MushroomModule } from './modules/mushroom/mushroom.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/test?directConnection=true',
    ),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'test',
      directConnection: true,
    }),
    MushroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
