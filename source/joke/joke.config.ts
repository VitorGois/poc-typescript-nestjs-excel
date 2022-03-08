// TODO: Delete this example file
import { Config, InjectSecret } from '@gorila-bot/nestjs-core';

@Config()
export class JokeConfig {

  @InjectSecret({ fallback: 'https://api.chucknorris.io' })
  public readonly JOKE_HOST: string;

}
