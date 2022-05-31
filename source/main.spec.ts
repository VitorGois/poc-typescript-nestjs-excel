/* eslint-disable no-console */
import { AppModule, INestApplication } from '@gorila-bot/nestjs-core';
import { setTimeout } from 'timers/promises';

describe('Main', () => {
  let app: INestApplication;
  console.log = jest.fn();

  describe('boot', () => {
    it('should boot the application successfully', async () => {
      try {
        app = await AppModule.boot({ port: 0 });
      } catch (e) {
        console.error(e);
        throw e;
      }

      await setTimeout(500);
      await app.close();

      expect(true).toBeTruthy();
    });
  });
});
