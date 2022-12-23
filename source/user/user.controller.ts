// TODO: Delete this example file
import { ApiCreatedResponse, ApiOkResponse, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@gorila-bot/nestjs-core';

import { UserCollection, UserCreateDto, UserIdDto, UserUpdateDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  public constructor(
    private readonly userService: UserService,
  ) { }

  @Get()
  @ApiOkResponse({ type: UserCollection })
  public getUser(): UserCollection {
    return this.userService.readUsers();
  }

  @Get(':id')
  @ApiOkResponse({ type: User })
  public getUserById(@Param() params: UserIdDto): User {
    return this.userService.readUserById(params.id);
  }

  @Post()
  @ApiCreatedResponse({ type: User })
  public postUser(@Body() body: UserCreateDto): Promise<User> {
    return this.userService.createUser(body);
  }

  @Patch(':id')
  @ApiOkResponse({ type: User })
  public patchUser(@Param() params: UserIdDto, @Body() body: UserUpdateDto): User {
    return this.userService.updateUserById(params.id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public deleteUserById(@Param() params: UserIdDto): void {
    return this.userService.deleteUserById(params.id);
  }

}
