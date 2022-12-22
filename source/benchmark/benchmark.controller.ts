// TODO: Delete this example file
import { ApiOkResponse, Controller, Get } from '@gorila-bot/nestjs-core';

import { BenchmarkPageDto } from '../../sdk/benchmark/benchmark.dto.out';
import { BenchmarkProxy } from '../../sdk/benchmark/benchmark.proxy';

/**
 * You may use this controller to debug proxy cache functionality.
 *
 * To enable it at local environment, inform `PROXY_CACHE_ENABLE`
 * as `true` at your environment file.
 */
@Controller('benchmark')
export class BenchmarkController {

  public constructor(
    private readonly benchmarkProxy: BenchmarkProxy,
  ) { }

  @Get()
  @ApiOkResponse({ type: BenchmarkPageDto })
  public getBenchmark(): Promise<BenchmarkPageDto> {
    return this.benchmarkProxy.readBenchmark({});
  }

}
