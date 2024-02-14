import { Test, TestingModule } from '@nestjs/testing';
import { UserTasksController } from './user_tasks.controller';
import { UserTasksService } from './user_tasks.service';

describe('UserTasksController', () => {
  let controller: UserTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTasksController],
      providers: [UserTasksService],
    }).compile();

    controller = module.get<UserTasksController>(UserTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
