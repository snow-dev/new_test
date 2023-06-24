import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MushroomModule } from './modules/mushroom/mushroom.module';
import { GenericRepositoryModule } from './modules/generic-repository/generic-repository.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/test?directConnection=true',
    ),
    MushroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
