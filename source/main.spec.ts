/* eslint-disable no-console */
import { INestApplication } from '@gorila-bot/nestjs-core';
import { setTimeout } from 'timers/promises';

import { app } from './main';

describe('Main', () => {
  let nestApp: INestApplication;
  console.log = jest.fn();

  describe('boot', () => {
    it('should boot the application successfully', async () => {
      try {
        nestApp = await app;
      } catch (e) {
        console.error(e);
        throw e;
      }

      await setTimeout(500);
      await nestApp.close();

      expect(true).toBeTruthy();
    });
  });
});
