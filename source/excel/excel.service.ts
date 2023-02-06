/* eslint-disable jsdoc/require-jsdoc */
import { Injectable, uuidV4 } from '@gorila-bot/nestjs-core';
import ExcelJS from 'exceljs';

import { ExcelCreateDataDto, ExcelCreateDto } from './excel.dto.in';

@Injectable()
export class ExcelService {

  public async createExcel(params: ExcelCreateDto): Promise<ExcelJS.Buffer> {
    const { positions } = params;

    const workbook = this.createWorkbook();
    const sheet = this.addWorksheet(workbook);
    this.addColumns(sheet);
    const rows = this.addRows(sheet, positions);
    this.applyCellStyles(rows);

    const buffer = await workbook.xlsx.writeBuffer();

    return buffer;
  }

  private createWorkbook(): ExcelJS.Workbook {
    // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-var-requires
    const Excel = require('exceljs');

    const workbook = new Excel.Workbook();

    workbook.creator = 'Alan Turing';
    workbook.lastModifiedBy = 'Edward Snowden';
    workbook.created = new Date(1941, 5, 9);
    workbook.modified = new Date(2013, 5, 20);
    workbook.lastPrinted = new Date(2010, 6, 11);

    workbook.views = [
      {
        x: 0,
        y: 0,
        width: 10_000,
        height: 10_000,
        firstSheet: 0,
        activeTab: 1,
        visibility: 'visible',
      },
    ];

    return workbook;
  }

  private addWorksheet(workbook: ExcelJS.Workbook): ExcelJS.Worksheet {
    const sheet = workbook.addWorksheet('Positions', {
      properties: { tabColor: { argb: 'FFC0000' } },
      views: [ {
        showGridLines: false,
        state: 'frozen',
        xSplit: 1,
        ySplit: 1,
      } ],
      headerFooter: { firstHeader: 'Hello Exceljs', firstFooter: 'Hello World' },
      pageSetup: { paperSize: 9, orientation: 'landscape' },
    });

    return sheet;
  }

  private addColumns(sheet: ExcelJS.Worksheet): void {
    sheet.columns = [
      { header: 'Id', key: 'id', width: 45 },
      { header: 'Ativo', key: 'asset', width: 15 },
      { header: 'Preco Medio', key: 'avgPrice', width: 15 },
      { header: 'Quantidade', key: 'quantity', width: 15 },
    ];

    for (const column of sheet.columns) {
      column.font = { name: 'Arial Black', size: 12, bold: true };
    }
  }

  private addRows(sheet: ExcelJS.Worksheet, positions: ExcelCreateDataDto[]): ExcelJS.Row[] {
    const rowsToAdd = positions.map(({ asset, averagePrice, quantity }) => {
      return { id: uuidV4(), asset, avgPrice: averagePrice, quantity };
    });

    const rows: ExcelJS.Row[] = sheet.addRows(rowsToAdd);

    const row = sheet.addRow({ id: uuidV4(), asset: 'PETR4', avgPrice: 32.5, quantity: 200 });

    return [ ...rows, row ];
  }

  private applyCellStyles(rows: ExcelJS.Row[]): void {
    for (const row of rows) {
      row.eachCell((cell) => {
        cell.font = {
          name: 'Arial',
          family: 4,
          size: 12,
        };

        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    }
  }

}
