import { mock } from "jest-mock-extended";
import { taskService } from "../../../src/infrastructure/services/task-service";
import {
  HttpClient,
  HttpResponse,
} from "../../../src/presentation/protocols/http";
import {
  TaskListResponse,
  TaskResponse,
} from "../../../src/domain/contracts/services/task-service-contract";
import { Task } from "../../../src/domain/entities/task";

describe("TaskService", () => {
  describe("GET /tasks", () => {
    it("should be retrieve all tasks", async () => {
      const mockHttpClient = mock<HttpClient>();

      const mockResponse: HttpResponse<TaskListResponse> = {
        statusCode: 200,
        body: {
          tasks: [{ id: 1, title: "Learn Jest", completed: true }],
        },
      };
      mockHttpClient.request.mockResolvedValue(mockResponse);

      const taskRepository = taskService(mockHttpClient);
      const response = await taskRepository.getAllTasks();
      expect(response.statusCode).toEqual(200);
      expect(response.body?.tasks).toStrictEqual([
        { id: 1, title: "Learn Jest", completed: true },
      ]);
    });
  });

  describe("POST /tasks", () => {
    it("should be create a task", async () => {
      const mockHttpClient = mock<HttpClient>();

      const mockRequest: Task = {
        title: "Learn Jest",
      };
      const mockResponse: HttpResponse<TaskResponse> = {
        statusCode: 200,
        body: { id: 1, title: "Learn Jest", completed: true },
      };
      mockHttpClient.request.mockResolvedValue(mockResponse);

      const taskRepository = taskService(mockHttpClient);
      const response = await taskRepository.createTask(mockRequest);
      expect(response.statusCode).toEqual(200);
      expect(response.body).toStrictEqual({
        id: 1,
        title: "Learn Jest",
        completed: true,
      });
    });
  });

  describe("PUT /tasks", () => {
    it("should be update a task", async () => {
      const mockHttpClient = mock<HttpClient>();

      const mockRequest: Task = {
        title: "Learn Jest",
      };
      const mockResponse: HttpResponse<TaskResponse> = {
        statusCode: 200,
        body: { id: 1, title: "Learn Jest", completed: true },
      };
      mockHttpClient.request.mockResolvedValue(mockResponse);

      const taskRepository = taskService(mockHttpClient);
      const response = await taskRepository.updateTask(1, mockRequest);
      expect(response.statusCode).toEqual(200);
      expect(response.body).toStrictEqual({
        id: 1,
        title: "Learn Jest",
        completed: true,
      });
    });
  });

  describe("DELETE /tasks", () => {
    it("should be delete a task", async () => {
      const mockHttpClient = mock<HttpClient>();

      const mockResponse: HttpResponse<TaskResponse> = {
        statusCode: 200,
        body: { id: 1, title: "Learn Jest", completed: true },
      };
      mockHttpClient.request.mockResolvedValue(mockResponse);

      const taskRepository = taskService(mockHttpClient);
      const response = await taskRepository.deleteTask(1);
      expect(response.statusCode).toEqual(200);
      expect(response.body).toStrictEqual({
        id: 1,
        title: "Learn Jest",
        completed: true,
      });
    });
  });
});
