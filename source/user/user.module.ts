// TODO: Delete this example file
import { Module } from '@gorila-bot/nestjs-core';

import { JokeModule } from '../joke/joke.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    JokeModule,
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
