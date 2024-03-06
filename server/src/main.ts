import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EventsGateway } from './events/events.gateway';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const eventsGateway = app.get(EventsGateway);
  setInterval(() => eventsGateway.sendMessage(), 2000);
}
bootstrap();
