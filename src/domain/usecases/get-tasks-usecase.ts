import { HttpResponse } from "../../presentation/protocols/http";
import { TaskService } from "../contracts/services/task-service-contract";
import { UseCase } from "../contracts/usecases/usecase-contract";
import { Task } from "../entities/task";

export namespace GetTasksUseCase {
  export type Result = HttpResponse<Task[]>;
}

export const getTasksUseCase = (
  taskService: TaskService
): UseCase<any, HttpResponse<Task[]>> => ({
  async execute(): Promise<GetTasksUseCase.Result> {
    return await taskService.getAllTasks();
  },
});
