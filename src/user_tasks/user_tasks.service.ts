import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserTaskDto } from './dto/create-user_task.dto';
import { UpdateUserTaskDto } from './dto/update-user_task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTasks } from './entities/usertask.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserTasksService {
  constructor(
    @InjectRepository(UserTasks)
    private readonly userTaskRepo: Repository<UserTasks> 
  ) {}

  async createTask(data: CreateUserTaskDto): Promise<any> {
    try {
      const task = this.userTaskRepo.create({
        task_title: data.task_title,
        task_description: data.task_description,
        status: data.status
      })
      const newTask = await this.userTaskRepo.save(task);
      if(newTask) {
        return {
          statusCode : HttpStatus.CREATED,
          message: 'Task created successfully'
        }
      } else {
        throw new HttpException('Failed to create new task', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getTaskList(): Promise<any> {
    try {
      const result = await this.userTaskRepo.find();
      if(result.length) {
        return {
          statCode: HttpStatus.FOUND,
          message: 'Success',
          data: result
        }
      } else {
        throw new HttpException('List not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async getTaskListByStatus(): Promise<any> {
    try {
      const result = await this.userTaskRepo.createQueryBuilder('task')
      .select('task.status AS status')
      .addSelect('GROUP_CONCAT(CONCAT(\'{"id":\', task.id, \',"task_title":"\', task.task_title, \'","task_description":"\', task.task_description, \'"}\')) AS tasks')
      .groupBy('task.status')
      .getRawMany();

      result.forEach(status => {
        status.tasks = JSON.parse('[' + status.tasks + ']');
      });

      if(result.length) {
        return {
          statCode: HttpStatus.OK,
          message: 'Success',
          data: result
        }
      } else {
        throw new HttpException('List not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteTask(id: number): Promise<any> {
    const taskExist = await this.userTaskRepo.findOne({ where: {id: id}})
    if(taskExist) {
      await this.userTaskRepo.delete({id: id});
    }
    return {
      statCode: HttpStatus.OK,
      message: 'Task has been deleted successfully',
    }
  }
}
