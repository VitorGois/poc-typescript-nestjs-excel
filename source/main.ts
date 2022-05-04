import { AppEnvironment, AppModule, ConfigModule } from '@gorila-bot/nestjs-core';

void AppModule.boot({
  // TODO: Configure application name
  job: '{{appName}}',

  // TODO: Configure proxy prefix when deploying application on cluster
  proxyPrefix: ConfigModule.get('NODE_ENV') !== AppEnvironment.LOCAL ? '{{appPath}}/v1' : '',

  // TODO: Configure slack channel for warning+ alerts
  slack: { channel: 'alert-{{appName}}' },

  // TODO: Configure application title and description
  docs: {
    title: '{{appTitle}}',
    description: '{{appDescription}}',
  },
});
