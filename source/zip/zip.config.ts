// TODO: Delete this example file
import { Config, InjectConfig } from '@gorila-bot/nestjs-core';

@Config()
export class ZipConfig {

  @InjectConfig({ fallback: 'https://viacep.com.br/ws' })
  public readonly ZIP_HOST: string;

}
