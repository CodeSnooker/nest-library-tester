import { Injectable } from '@nestjs/common';
import { RandomNumberService } from 'cs-nestrand';

@Injectable()
export class AppService {
  constructor(private readonly service: RandomNumberService) {}

  getHello(): any {
    return this.service.generate();
  }
}
