import { HttpResponse } from "../../presentation/protocols/http";
import { TaskService } from "../contracts/services/task-service-contract";
import { UseCase } from "../contracts/usecases/usecase-contract";
import { Task } from "../entities/task";

export namespace CreateTaskUseCase {
  export type Params = Task;
  export type Result = HttpResponse<Task>;
}

export const createTaskUseCase = (
  taskService: TaskService
): UseCase<Task, HttpResponse<Task>> => ({
  async execute(
    data: CreateTaskUseCase.Params
  ): Promise<CreateTaskUseCase.Result> {
    return await taskService.createTask(data);
  },
});
