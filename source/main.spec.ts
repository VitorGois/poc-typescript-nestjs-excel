/* eslint-disable no-console */
import { AppModule } from '@gorila-bot/nestjs-core';

describe('bootServer', () => {
  it('should boot the application successfully', async () => {
    console.log = jest.fn();

    try {
      await AppModule.boot();
    } catch (e) {
      console.error(e);
      throw e;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(true).toBeTruthy();
  });
});
