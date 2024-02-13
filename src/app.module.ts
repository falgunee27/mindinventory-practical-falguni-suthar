// app.module.ts

import { Module } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [User],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
