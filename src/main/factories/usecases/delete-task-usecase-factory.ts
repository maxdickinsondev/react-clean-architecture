import { UseCase } from "../../../domain/contracts/usecases/usecase-contract";
import { deleteTaskUseCase } from "../../../domain/usecases/delete-task-usecase";
import { makeTaskService } from "../services/task-service-factory";

export const makeDeleteTaskUseCase = (): UseCase => {
  return deleteTaskUseCase(makeTaskService());
};
