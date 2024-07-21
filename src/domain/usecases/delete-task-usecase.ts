import { HttpResponse } from "../../presentation/protocols/http";
import {
  TaskResponse,
  TaskService,
} from "../contracts/services/task-service-contract";
import { UseCase } from "../contracts/usecases/usecase-contract";

export namespace DeleteTaskUseCase {
  export type Params = { id: number };
  export type Result = Promise<HttpResponse<TaskResponse>>;
}

export const deleteTaskUseCase = (taskService: TaskService): UseCase => ({
  async execute({
    id,
  }: DeleteTaskUseCase.Params): Promise<DeleteTaskUseCase.Result> {
    return await taskService.deleteTask(id);
  },
});
