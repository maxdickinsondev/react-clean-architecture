import { getTasksUseCase } from "../../../domain/usecases/get-tasks-usecase";
import { makeTaskService } from "../services/task-service-factory";

export const makeGetTasksUseCase = () => {
  return getTasksUseCase(makeTaskService());
};
