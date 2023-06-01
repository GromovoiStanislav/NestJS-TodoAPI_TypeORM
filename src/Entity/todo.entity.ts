import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { Exclude } from "class-transformer";

export enum TodoStatus {
  OPEN = "OPEN",
  WIP = "WIP",
  COMPLETED = "COMPLETED"
}


@Entity("todos")
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: "enum", enum: TodoStatus, enumName: "status", default: TodoStatus.OPEN })
  status: TodoStatus;

  @ManyToOne(() => UserEntity, (user) => user.todos)
  user: UserEntity;

  @Column()
  @Exclude()
  userId: number;
}


