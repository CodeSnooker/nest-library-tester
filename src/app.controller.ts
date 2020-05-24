import { Controller, Get } from '@nestjs/common';
import { TelegramService } from 'cs-nestrand';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly telegram: TelegramService,
  ) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
}
