import { Injectable } from '@nestjs/common';
import { FakeModel } from './dto/fake-model.dto';
import { FakeDataGeneratorService } from './fake-generator/fake-data-generator.service';

const DEFAULT_COUNT = 10;

@Injectable()
export class DataService {
  constructor(private readonly generator: FakeDataGeneratorService) {}

  async getModels(count?: number): Promise<FakeModel[]> {
    if (!count) {
      count = DEFAULT_COUNT;
    }
    const response = this.generator.generateBatch(count);
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 2000);
    });
  }
}
