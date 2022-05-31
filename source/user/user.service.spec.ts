// TODO: Delete this example file
import { AppModule, HttpStatus, uuidV4 } from '@gorila-bot/nestjs-core';

import { UserCreateDto } from './user.dto';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let createdUser: User;

  beforeAll(async () => {
    const app = await AppModule.compile({
      disableAll: true,
      imports: [ UserModule ],
    });

    userService = app.get(UserService);
  });

  describe('createUser', () => {
    it('should create an user', async () => {
      const userData: UserCreateDto = {
        name: 'Jane',
        taxId: '123.456.789-00',
        age: 28,
        address: {
          zip: '03030000',
          number: '100',
        },
      };

      createdUser = await userService.createUser(userData);

      expect(createdUser).toMatchObject(userData);
      expect(createdUser.id?.length).toBe(36);
    });
  });

  describe('readUserById', () => {
    it('read an user by ID', () => {
      const user = userService.readUserById(createdUser.id);
      expect(user).toBe(createdUser);
    });

    it('throw an exception if reading non-existent user', () => {
      let readError: Error;

      try {
        userService.readUserById(uuidV4() as string);
      } catch (e) {
        readError = e;
      }

      expect(readError?.['status']).toBe(HttpStatus.NOT_FOUND);
    });
  });

  describe('deleteUserById', () => {
    it('delete an user by ID', () => {
      let deleteError: Error;
      userService.deleteUserById(createdUser.id);

      try {
        userService.readUserById(createdUser.id);
      } catch (e) {
        deleteError = e;
      }

      expect(deleteError?.['status']).toBe(HttpStatus.NOT_FOUND);
    });

    it('throw an exception if deleting non-existent user', () => {
      let deleteError: Error;

      try {
        userService.deleteUserById(createdUser.id);
      } catch (e) {
        deleteError = e;
      }

      expect(deleteError?.['status']).toBe(HttpStatus.NOT_FOUND);
    });
  });
});
