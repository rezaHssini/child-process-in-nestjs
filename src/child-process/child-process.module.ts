import { Module } from '@nestjs/common';
import { ChildProcessService } from './child-process.service';

@Module({
  imports: [],
  providers: [ChildProcessService],
  exports: [ChildProcessService],
})
export class ChildProcessModule {}
