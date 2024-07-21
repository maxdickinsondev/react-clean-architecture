import { HttpResponse } from "../../../presentation/protocols/http";
import { Task } from "../../entities/task";

export type TaskResponse = Task;

export interface TaskListResponse {
  tasks: TaskResponse[];
}

export interface TaskService {
  getAllTasks(): Promise<HttpResponse<TaskListResponse>>;
  createTask(data: Task): Promise<HttpResponse<TaskResponse>>;
  updateTask(id: number, data: Task): Promise<HttpResponse<TaskResponse>>;
  deleteTask(id: number): Promise<HttpResponse<TaskResponse>>;
}
