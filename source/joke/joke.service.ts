// TODO: Delete this example file
import { HttpService, Injectable } from '@gorila-bot/nestjs-core';

import { Joke } from './joke.interface';

@Injectable()
export class JokeService {

  public constructor(
    private readonly httpService: HttpService,
  ) { }

  /**
   * Reads a random Chuck Norris joke.
   */
  public readRandomJoke(): Promise<Joke> {
    return this.httpService.get('jokes/random');
  }

}
