import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EventsModule, UserModule, AuthModule],
})
export class AppModule {}
