// TODO: Delete this example file
import { IsNumber, IsObject, Min, OmitType, PickType } from '@gorila-bot/nestjs-core';

import { User } from './user.entity';

export class UserIdDto extends PickType(User, [ 'id' ]) { }

export class UserCreateDto extends OmitType(User, [ 'id', 'originId' ]) { }

export class UserUpdateDto extends PickType(User, [ 'email', 'phone' ]) { }

export class UserCollection {

  @IsNumber() @Min(0)
  public count: number;

  @IsObject(User, { each: true })
  public records: User[];

}
