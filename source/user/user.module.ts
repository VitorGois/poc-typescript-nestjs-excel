// TODO: Delete this example file
import { Module } from '@gorila-bot/nestjs-core';

import { ZipModule } from '../zip/zip.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ZipModule,
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
