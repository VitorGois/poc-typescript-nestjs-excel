// TODO: Delete this example file
import { HttpModule, Module } from '@gorila-bot/nestjs-core';

import { JokeConfig } from './joke.config';
import { JokeService } from './joke.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ JokeModule ],
      inject: [ JokeConfig ],
      useFactory: (jokeConfig: JokeConfig) => ({
        prefixUrl: jokeConfig.JOKE_HOST,
        resolveBodyOnly: true,
        responseType: 'json',
      }),
    }),
  ],
  providers: [
    JokeConfig,
    JokeService,
  ],
  exports: [
    JokeConfig,
    JokeService,
  ],
})
export class JokeModule { }
