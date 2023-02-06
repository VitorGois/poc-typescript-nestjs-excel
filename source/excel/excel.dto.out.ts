import { IsString } from '@gorila-bot/nestjs-core';
import ExcelJS from 'exceljs';

export class ExcelDto {

  @IsString()
  public buffer: ExcelJS.Buffer;

}
