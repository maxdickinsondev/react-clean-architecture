import {
  TaskListResponse,
  TaskResponse,
  TaskService,
} from "../../domain/contracts/services/task-service-contract";
import { Task } from "../../domain/entities/task";
import { HttpClient, HttpResponse } from "../../presentation/protocols/http";

export const taskService = (httpClient: HttpClient): TaskService => ({
  async getAllTasks(): Promise<HttpResponse<TaskListResponse>> {
    return await httpClient.request<TaskListResponse>({
      url: "/tasks",
      method: "get",
    });
  },

  async createTask(data: Task): Promise<HttpResponse<TaskResponse>> {
    return await httpClient.request<TaskResponse>({
      url: "/tasks",
      method: "post",
      body: data,
    });
  },

  async updateTask(
    id: number,
    data: Task
  ): Promise<HttpResponse<TaskResponse>> {
    return await httpClient.request<TaskResponse>({
      url: `/tasks/${id}`,
      method: "put",
      body: data,
    });
  },

  async deleteTask(id: number): Promise<HttpResponse<TaskResponse>> {
    return await httpClient.request<TaskResponse>({
      url: `/tasks/${id}`,
      method: "delete",
    });
  },
});
