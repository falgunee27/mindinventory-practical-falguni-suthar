import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTaskDto } from './create-user_task.dto';

export class UpdateUserTaskDto extends PartialType(CreateUserTaskDto) {}
