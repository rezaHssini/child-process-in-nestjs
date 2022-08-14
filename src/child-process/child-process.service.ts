import { Injectable } from '@nestjs/common';
// tslint:disable:no-var-requires
const { fork } = require('child_process');
const path = require('path');

@Injectable()
export class ChildProcessService {
  private forkNestDataGeneratorModuleApp = null;

  getforkNestDataGeneratorModuleApp() {
    if (!this.forkNestDataGeneratorModuleApp) {
      this.forkNestDataGeneratorModuleApp = fork(
        path.resolve(__dirname, '../data/child-process/child-process'),
      );
    }
    return this.forkNestDataGeneratorModuleApp;
  }
}
