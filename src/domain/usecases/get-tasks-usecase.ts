import { HttpResponse } from "../../presentation/protocols/http";
import {
  TaskListResponse,
  TaskService,
} from "../contracts/services/task-service-contract";
import { UseCase } from "../contracts/usecases/usecase-contract";

export namespace GetTasksUseCase {
  export type Result = HttpResponse<TaskListResponse>;
}

export const getTasksUseCase = (
  taskService: TaskService
): UseCase<any, HttpResponse<TaskListResponse>> => ({
  async execute(): Promise<GetTasksUseCase.Result> {
    return await taskService.getAllTasks();
  },
});
