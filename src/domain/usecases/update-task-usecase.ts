import { HttpResponse } from "../../presentation/protocols/http";
import { TaskService } from "../contracts/services/task-service-contract";
import { UseCase } from "../contracts/usecases/usecase-contract";
import { Task } from "../entities/task";

export namespace UpdateTaskUseCase {
  export type Params = { id: number; data: Task };
  export type Result = HttpResponse<Task>;
}

export const updateTaskUseCase = (taskService: TaskService): UseCase => ({
  async execute({
    id,
    data,
  }: UpdateTaskUseCase.Params): Promise<UpdateTaskUseCase.Result> {
    return await taskService.updateTask(id, data);
  },
});
