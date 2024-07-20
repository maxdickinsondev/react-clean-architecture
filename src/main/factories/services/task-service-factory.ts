import { taskService } from "../../../infrastructure/services/task-service";
import { makeHttpClient } from "../http/http-client-factory";

export const makeTaskService = () => {
  return taskService(makeHttpClient());
};
