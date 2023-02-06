import { ApiCreatedResponse, Body, Controller, Post } from '@gorila-bot/nestjs-core';
import ExcelJS from 'exceljs';

import { ExcelCreateDto } from './excel.dto.in';
import { ExcelService } from './excel.service';

@Controller('excel')
export class ExcelController {

  public constructor(
    private readonly excelService: ExcelService,
  ) { }

  @Post()
  @ApiCreatedResponse({ type: Buffer })
  public postExcel(@Body() body: ExcelCreateDto): Promise<ExcelJS.Buffer> {
    return this.excelService.createExcel(body);
  }

}
