import { Module } from '@nestjs/common';
import { UserTasksService } from './user_tasks.service';
import { UserTasksController } from './user_tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTasks } from './entities/usertask.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTasks])],
  controllers: [UserTasksController],
  providers: [UserTasksService],
})
export class UserTasksModule {}
