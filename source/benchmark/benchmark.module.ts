// TODO: Delete this example file
import { Module } from '@gorila-bot/nestjs-core';
import { BenchmarkModule } from '@gorila-bot/nestjs-proxies';

import { BenchmarkController } from './benchmark.controller';

@Module({
  imports: [
    BenchmarkModule,
  ],
  controllers: [
    BenchmarkController,
  ],
})
export class BenchmarkProxyModule { }
