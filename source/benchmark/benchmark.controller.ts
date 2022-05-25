// TODO: Delete this example file
import { Controller, Get } from '@gorila-bot/nestjs-core';
import { BenchmarkService } from '@gorila-bot/nestjs-proxies';

/**
 * You may use this controller to debug proxy cache functionality.
 *
 * To enable it at local environment, inform `PROXY_CACHE_ENABLE`
 * as `true` at your environment file.
 */
@Controller('benchmark')
export class BenchmarkController {

  public constructor(
    private readonly benchmarkService: BenchmarkService,
  ) { }

  @Get({
    response: { type: [ String ] },
  })
  public getBenchmark(): Promise<string[]> {
    return this.benchmarkService.readBenchmarks();
  }

}
