import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { FakeDataGeneratorService } from './fake-generator/fake-data-generator.service';

@Module({
  imports: [],
  providers: [FakeDataGeneratorService, DataService],
  exports: [DataService],
})
export class DataModule {}
