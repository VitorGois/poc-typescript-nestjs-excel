// TODO: Delete this example file
import { Module } from '@gorila-bot/nestjs-core';

import { BenchmarkSdk } from '../../sdk/benchmark/benchmark.sdk';
import { BenchmarkController } from './benchmark.controller';

@Module({
  imports: [
    BenchmarkSdk,
  ],
  controllers: [
    BenchmarkController,
  ],
})
export class BenchmarkProxyModule { }
