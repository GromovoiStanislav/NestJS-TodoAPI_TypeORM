import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty({ maximum: 15 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(15, { message: "Max length is 15 characters." })
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
}
