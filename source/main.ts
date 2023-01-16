import { AppEnvironment, AppModule, ConfigModule, LogSeverity } from '@gorila-bot/nestjs-core';

const nodeEnv: AppEnvironment = ConfigModule.get('NODE_ENV');

const isCloud = [
  AppEnvironment.DEVELOPMENT,
  AppEnvironment.STAGING,
  AppEnvironment.PRODUCTION,
].includes(nodeEnv);

/**
 * // TODO: Configure variables
 * - appName: Application name in kebab-case
 * - appTitle: Friendly title at generated documentation
 * - appDescription: Description at generated documentation.
 */
export const app = AppModule.boot({
  name: '{{appName}}',
  logs: {
    enableRequestBody: !isCloud,
    enableResponseBody: !isCloud,
  },
  console: {
    severity: /* istanbul ignore next */ isCloud
      ? LogSeverity.HTTP
      : LogSeverity.TRACE,
  },
  docs: {
    title: '{{appTitle}}',
    description: '{{appDescription}}',
  },
});
