// TODO: Delete this example file
import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsNumberString, IsObject, IsOptional, IsString, IsUUID, Length, Matches, Min, MinLength, Type, ValidateNested } from '@gorila-bot/nestjs-core';

import { UserGender } from './user.enum';

export class UserAddress {

  @IsString() @IsNotEmpty()
  public street: string;

  @IsString() @IsNotEmpty()
  public city: string;

  @IsNumberString() @Length(5, 8)
  public zip: string;

}

export class User {

  /** Automatically generated user ID. */
  @IsString() @IsUUID()
  public id?: string;

  /** Extracted request ID which triggered user creation. */
  @IsString()
  public originId?: string;

  /** Remotely fetch random joke during creation. */
  @IsString()
  public luckyJoke?: string;

  @IsString() @MinLength(3)
  public givenName: string;

  @IsString() @MinLength(3)
  public familyName: string;

  @Matches(/(?:\d{3}\.){2}\d{3}-\d{2}/)
  public taxId: string;

  @IsNumber() @Min(0)
  public age: number;

  @IsIn(Object.values(UserGender))
  public gender: UserGender;

  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsNumberString() @Length(10, 11)
  public phone?: string;

  @ValidateNested()
  @Type(() => UserAddress)
  @IsObject()
  public address: UserAddress;

}
