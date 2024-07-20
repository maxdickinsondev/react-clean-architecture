import { HttpResponse } from "../../../presentation/protocols/http";
import { Task } from "../../entities/task";

export interface TaskService {
  getAllTasks(): Promise<HttpResponse<Task[]>>;
  createTask(data: Task): Promise<HttpResponse<Task>>;
  updateTask(id: number, data: Task): Promise<HttpResponse<Task>>;
  deleteTask(id: number): Promise<HttpResponse<Task>>;
}
