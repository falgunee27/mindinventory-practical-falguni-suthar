// app.module.ts

import { Module } from '@nestjs/common';
import { Users } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTasksModule } from './user_tasks/user_tasks.module';
import { UserTasks } from './user_tasks/entities/usertask.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "task-management",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
    }),
    UsersModule,
    UserTasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
