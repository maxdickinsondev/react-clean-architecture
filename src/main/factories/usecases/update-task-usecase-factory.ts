import { UseCase } from "../../../domain/contracts/usecases/usecase-contract";
import { updateTaskUseCase } from "../../../domain/usecases/update-task-usecase";
import { makeTaskService } from "../services/task-service-factory";

export const makeUpdateTaskUseCase = (): UseCase => {
  return updateTaskUseCase(makeTaskService());
};
