// TODO: Delete this example file
import { AppModule, HttpStatus, INestApplication } from '@gorila-bot/nestjs-core';
import supertest from 'supertest';

import { UserModule } from './user.module';
import { UserService } from './user.service';

describe('UserController', () => {
  let app: INestApplication;
  let userService: UserService;
  let httpServer: any;

  beforeAll(async () => {
    app = await AppModule.boot({
      disableLogs: true,
      port: 0,
      imports: [ UserModule ],
    });

    httpServer = app.getHttpServer();
    userService = app.get(UserService);

    jest.spyOn(userService, 'createUser').mockReturnValue(null);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /user', () => {
    it('201', async () => {
      const res = await supertest(httpServer).post('/user').send({
        name: 'Test',
        age: 30,
        address: { zip: '00000000', number: '100' },
      });

      expect(res.statusCode).toBe(HttpStatus.CREATED);
    });

    it('400', async () => {
      const res = await supertest(httpServer).post('/user').send({
        name: 'Test',
        age: 30,
        address: { },
      });

      expect(res.statusCode).toBe(HttpStatus.BAD_REQUEST);
    });
  });
});
