// TODO: Delete this example file
import { Config, InjectSecret } from '@gorila-bot/nestjs-core';

@Config()
export class ZipConfig {

  @InjectSecret({ fallback: 'https://viacep.com.br/ws' })
  public readonly ZIP_HOST: string;

}
