import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { TodoModule } from "./todo/todo.module";
import { AuthModule } from "./auth/auth.module";

const ormOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "mydb",
  autoLoadEntities: true,
  synchronize: true
};

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    TodoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
