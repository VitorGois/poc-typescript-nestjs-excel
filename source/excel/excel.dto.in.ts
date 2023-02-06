import { IsNumber, IsObject, IsString } from '@gorila-bot/nestjs-core';

export class ExcelCreateDataDto {

  @IsString()
  public asset: string;

  @IsNumber()
  public averagePrice: number;

  @IsNumber()
  public quantity: number;

}

export class ExcelCreateDto {

  @IsObject(ExcelCreateDataDto, { each: true })
  public positions: ExcelCreateDataDto[];

}
