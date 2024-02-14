import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UserTasksService } from './user_tasks.service';
import { CreateUserTaskDto } from './dto/create-user_task.dto';
import { UpdateUserTaskDto } from './dto/update-user_task.dto';
import { validate } from 'class-validator';

@Controller('user-tasks')
export class UserTasksController {
  constructor(private readonly userTasksService: UserTasksService) {}

  @Post('create-task')
  async createTask(@Body() body: CreateUserTaskDto): Promise<any> {
    return this.userTasksService.createTask(body);
  }

  @Get('task-list')
  async getTaskList(): Promise<any> {
    return this.userTasksService.getTaskList();
  }

  @Get('task-list-by-status')
  async getTaskListByStatus(): Promise<any> {
    return this.userTasksService.getTaskListByStatus();
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<any> {
    return this.userTasksService.deleteTask(+id);
  }
}
