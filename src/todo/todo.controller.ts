import {
  Body, ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
  ValidationPipe
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "../DTO/create-todo.dto";
import { TodoStatus } from "../Entity/todo.entity";
import { TodoStatusValidationPipe } from "../pipes/TodoStatusValidation.pipe";
import { AuthGuard } from "@nestjs/passport";
import { User } from "../auth/user.decorator";
import { UserEntity } from "../Entity/user.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

// http://localhost:3000/api/todos
@ApiBearerAuth()
@ApiTags("todos")
@Controller("todos")
@UseGuards(AuthGuard())
@UseInterceptors(ClassSerializerInterceptor)
export class TodoController {

  constructor(
    private todoService: TodoService
  ) {
  }


  @Get()
  async getAllTodos(@User() user: UserEntity) {
    return this.todoService.getAllTodos(user);
  }


  @Post()
  async createNewTodo(
    @Body(ValidationPipe) data: CreateTodoDto,
    @User() user: UserEntity
  ) {
    return this.todoService.createTodo(data, user);
  }


  @Patch(":id")
  async updateTodo(
    @Body("status", TodoStatusValidationPipe) status: TodoStatus,
    @Param("id") id: number,
    @User() user: UserEntity
  ) {
    return this.todoService.update(id, status, user);
  }


  @Delete(":id")
  async deleteTodo(
    @Param("id") id: number,
    @User() user: UserEntity
  ) {
    return this.todoService.delete(id, user);
  }

}
