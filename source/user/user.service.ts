// TODO: Delete this example file
import { ContextService, Injectable, NotFoundException, uuidV4 } from '@gorila-bot/nestjs-core';

import { JokeService } from '../joke/joke.service';
import { UserCreateDto, UserUpdateDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

  private readonly USER_DATABASE: User[] = [ ];

  public constructor(
    private readonly contextService: ContextService,
    private readonly jokeService: JokeService,
  ) { }

  /**
   * Read all users.
   */
  public readUsers(): User[] {
    return this.USER_DATABASE;
  }

  /**
   * Read user by ID.
   * @param id
   */
  public readUserById(id: string): User {
    const user = this.USER_DATABASE.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException('user does not exist');
    }

    return user;
  }

  /**
   * Create user.
   * @param params
   */
  public async createUser(params: UserCreateDto): Promise<User> {
    const joke = await this.jokeService.readRandomJoke();

    const user: User = {
      id: uuidV4(),
      originId: this.contextService.getRequestId(),
      luckyJoke: joke.value,
      ...params,
    };

    this.USER_DATABASE.push(user);

    return user;
  }

  /**
   * Update user by id.
   * @param id
   * @param params
   */
  public updateUserById(id: string, params: UserUpdateDto): User {
    const user = this.readUserById(id);

    for (const key in params) {
      user[key] = params[key];
    }

    return user;
  }

  /**
   * Delete user by id.
   * @param id
   */
  public deleteUserById(id: string): void {
    const index = this.USER_DATABASE.findIndex((u) => u.id === id);

    if (index === -1) {
      throw new NotFoundException('user does not exist');
    }

    this.USER_DATABASE.splice(index, 1);
  }

}
