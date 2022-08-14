import { Injectable } from '@nestjs/common';
import { FakeModel } from '../dto/fake-model.dto';

@Injectable()
export class FakeDataGeneratorService {
  constructor() {}

  generateSingle(): FakeModel {
    return {
      fakePropertyOne: Math.floor(Math.random() * 999),
      fakePropertyTwo: Math.floor(Math.random() * 999),
      fakePropertyThree: Math.floor(Math.random() * 999),
    };
  }
  generateBatch(batchSize: number): FakeModel[] {
    const response: FakeModel[] = [];
    for (let i = 0; i < batchSize; i++) {
      const generated = this.generateSingle();
      response.push(generated);
    }
    return response;
  }
}
