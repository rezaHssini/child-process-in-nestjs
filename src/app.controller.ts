import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FakeModel } from './data/dto/fake-model.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getModels(): FakeModel[] {
    return this.appService.getModels();
  }
}
