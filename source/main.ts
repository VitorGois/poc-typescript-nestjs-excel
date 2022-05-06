import { AppEnvironment, AppModule, ConfigModule, LogSeverity } from '@gorila-bot/nestjs-core';

const nodeEnv: AppEnvironment = ConfigModule.get('NODE_ENV');
const isLocal = nodeEnv === AppEnvironment.LOCAL;

/**
 * // TODO: Configure variables
 * - appName: Application name
 * - appPath: Path prefix used at cluster
 * - appTitle: Title at generated documentation
 * - appDescription: Description at generated documentation.
 */
void AppModule.boot({
  job: '{{appName}}',
  proxyPrefix: isLocal ? '' : '{{appPath}}/v1',
  logs: {
    filterRequestBody: !isLocal,
    filterResponseBody: !isLocal,
  },
  console: {
    severity: isLocal ? LogSeverity.TRACE : LogSeverity.DEBUG,
  },
  slack: {
    channel: 'alert-{{appName}}',
  },
  docs: {
    title: '{{appTitle}}',
    description: '{{appDescription}}',
  },
});
