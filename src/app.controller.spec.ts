import { Test, TestingModule } from '@nestjs/testing';
import { NestrandModule, TelegramModule } from 'cs-nestrand';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [NestrandModule.forRoot({ min: 100, max: 200 }), TelegramModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const d = appController.getHello();
      expect(appController.getHello()).toBeDefined();
    });
  });
});
