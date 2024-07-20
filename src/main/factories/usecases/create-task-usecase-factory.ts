import { UseCase } from "../../../domain/contracts/usecases/usecase-contract";
import { createTaskUseCase } from "../../../domain/usecases/create-task-usecase";
import { makeTaskService } from "../services/task-service-factory";

export const makeCreateTaskUseCase = (): UseCase => {
  return createTaskUseCase(makeTaskService());
};
