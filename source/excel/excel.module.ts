import { Module } from '@gorila-bot/nestjs-core';

import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';

@Module({
  controllers: [
    ExcelController,
  ],
  providers: [
    ExcelService,
  ],
})
export class ExcelModule { }
