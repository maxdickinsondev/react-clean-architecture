import { TaskService } from "../../domain/contracts/services/task-service-contract";
import { Task } from "../../domain/entities/task";
import { HttpClient, HttpResponse } from "../../presentation/protocols/http";

export const taskService = (httpClient: HttpClient): TaskService => ({
  async getAllTasks(): Promise<HttpResponse<Task[]>> {
    return await httpClient.request<Task[]>({ url: "/tasks", method: "get" });
  },

  async createTask(data: Task): Promise<HttpResponse<Task>> {
    return await httpClient.request<Task>({
      url: "/tasks",
      method: "post",
      body: data,
    });
  },

  async updateTask(id: number, data: Task): Promise<HttpResponse<Task>> {
    return await httpClient.request<Task>({
      url: `/tasks/${id}`,
      method: "put",
      body: data,
    });
  },

  async deleteTask(id: number): Promise<HttpResponse<Task>> {
    return await httpClient.request<Task>({
      url: `/tasks/${id}`,
      method: "delete",
    });
  },
});
