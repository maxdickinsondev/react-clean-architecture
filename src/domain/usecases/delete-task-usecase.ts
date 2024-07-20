import { HttpResponse } from "../../presentation/protocols/http";
import { TaskService } from "../contracts/services/task-service-contract";
import { UseCase } from "../contracts/usecases/usecase-contract";
import { Task } from "../entities/task";

export namespace DeleteTaskUseCase {
  export type Params = { id: number };
  export type Result = Promise<HttpResponse<Task>>;
}

export const deleteTaskUseCase = (taskService: TaskService): UseCase => ({
  async execute({
    id,
  }: DeleteTaskUseCase.Params): Promise<DeleteTaskUseCase.Result> {
    return await taskService.deleteTask(id);
  },
});
