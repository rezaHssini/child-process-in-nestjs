import { NestFactory } from "@nestjs/core";
import { DataModule } from "../data.module";
import { DataService } from "../data.service";

let service = null;
async function bootstrap() {
  const app = await NestFactory.create(DataModule);
  service = app.select(DataModule).get(DataService, { strict: true });

  process.on('message', async msg => {
    const response = await service.getModels(msg);
    process.send(response);
  });
}
bootstrap();