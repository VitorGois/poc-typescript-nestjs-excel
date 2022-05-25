// TODO: Delete this example file
import { HttpService, Injectable } from '@gorila-bot/nestjs-core';

import { Zip } from './zip.entity';

@Injectable()
export class ZipService {

  public constructor(
    private readonly httpService: HttpService,
  ) { }

  /**
   * Reads target brazilian zip address.
   * @param code
   */
  public readZip(code: string): Promise<Zip> {
    return this.httpService.get(':code/json', {
      replacements: { code },
    });
  }

}
