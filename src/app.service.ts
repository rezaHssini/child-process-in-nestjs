import { Injectable } from '@nestjs/common';
import { ChildProcessService } from './child-process/child-process.service';
import { FakeModel } from './data/dto/fake-model.dto';

@Injectable()
export class AppService {
  private forkedGeneratorModuleApp = null;
  private models: FakeModel[] = [];

  constructor(private readonly childProcess: ChildProcessService) {}
  
  //first time it'll return empty array but next times it'll have value
  getModels(): FakeModel[] {
    if (!this.forkedGeneratorModuleApp) {
      this.forkedGeneratorModuleApp =
        this.childProcess.getforkNestDataGeneratorModuleApp();
      this.forkedGeneratorModuleApp.send(10);
    }

    if (!this.models.length) {
      this.forkedGeneratorModuleApp.on('message', (models: FakeModel[]) => {
        this.models = models;
      });
    }

    return this.models;
  }
}
