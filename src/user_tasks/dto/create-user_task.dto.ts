import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { StatusEnum } from "src/utils/task_status.enum";

export class CreateUserTaskDto {

    @IsNotEmpty()
    @IsString()
    task_title: string;

    @IsNotEmpty()
    @IsString()
    task_description: string;

    @IsNotEmpty()
    @IsEnum(StatusEnum)
    status: StatusEnum;

}
