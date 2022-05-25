// TODO: Delete this example file
import { IsString } from '@gorila-bot/nestjs-core';

export class Zip {

  @IsString()
  public cep: string;

  @IsString()
  public logradouro: string;

  @IsString()
  public complemento: string;

  @IsString()
  public bairro: string;

  @IsString()
  public localidade: string;

  @IsString()
  public uf: string;

  @IsString()
  public ibge: string;

  @IsString()
  public gia: string;

  @IsString()
  public ddd: string;

  @IsString()
  public siafi: string;

}
