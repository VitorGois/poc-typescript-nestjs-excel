// TODO: Delete this example file
import { ApiOkResponse, Controller, Get, Param } from '@gorila-bot/nestjs-core';

import { Zip } from './zip.entity';
import { ZipService } from './zip.service';

@Controller('zip')
export class ZipController {

  public constructor(
    private readonly zipService: ZipService,
  ) { }

  @Get(':code')
  @ApiOkResponse({ type: Zip })
  public getZip(@Param('code') code: string): Promise<Zip> {
    return this.zipService.readZip(code);
  }

}
