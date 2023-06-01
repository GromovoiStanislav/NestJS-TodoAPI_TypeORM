import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "../DTO/register-user.dto";
import { UserLoginDto } from "../DTO/user-login.dto";
import { ApiTags } from "@nestjs/swagger";

// http://localhost:3000/api/auth
@ApiTags("auth")
@Controller("auth")
export class AuthController {

  constructor(
    private authService: AuthService
  ) {
  }

  @Post("register")
  async registration(@Body(ValidationPipe) regDTO: RegisterUserDto) {
    return this.authService.registerUser(regDTO);
  }

  @Post("login")
  async signin(@Body(ValidationPipe) loginDTO: UserLoginDto) {
    return this.authService.loginUser(loginDTO);
  }

}
