import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ minimum: 3, maximum: 12 })
  @IsNotEmpty()
  @IsString()
  @MinLength(3) @MaxLength(12)
    // @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    //   message: "Password is too weak, choose a stronger password between 6 and 12 characters"
    // })
  password: string;
}
