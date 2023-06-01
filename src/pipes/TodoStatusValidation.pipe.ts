import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TodoStatus } from "../Entity/todo.entity";

export class TodoStatusValidationPipe implements PipeTransform {

  readonly allowedStatus = [TodoStatus.OPEN, TodoStatus.WIP, TodoStatus.COMPLETED];

  transform(value: any, metadata: ArgumentMetadata): any {
    // console.log(metadata); -> { metatype: [Function: String], type: 'body', data: 'status' }

    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatus.includes(status);
  }

}
