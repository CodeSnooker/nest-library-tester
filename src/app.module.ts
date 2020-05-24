import { Module } from '@nestjs/common';
import { NestrandModule, TelegramModule } from 'cs-nestrand';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NestrandModule.forRoot({ min: 100, max: 200 }), TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
