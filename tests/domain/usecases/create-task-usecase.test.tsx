import { mock } from "jest-mock-extended";
import {
  TaskListResponse,
  TaskResponse,
  TaskService,
} from "../../../src/domain/contracts/services/task-service-contract";
import { getTasksUseCase } from "../../../src/domain/usecases/get-tasks-usecase";
import { createTaskUseCase } from "../../../src/domain/usecases/create-task-usecase";
import { updateTaskUseCase } from "../../../src/domain/usecases/update-task-usecase";
import { deleteTaskUseCase } from "../../../src/domain/usecases/delete-task-usecase";
import { HttpResponse } from "../../../src/presentation/protocols/http";

describe("CreateTaskUseCase", () => {
  it("should be get all tasks", async () => {
    const mockTaskService = mock<TaskService>();

    const mockResponse: HttpResponse<TaskListResponse> = {
      statusCode: 200,
      body: {
        tasks: [{ id: 1, title: "Learn Jest", completed: true }],
      },
    };
    mockTaskService.getAllTasks.mockResolvedValue(mockResponse);

    const taskUseCase = getTasksUseCase(mockTaskService);

    const task = await taskUseCase.execute({ title: "Learn Docker" });

    expect(task.body?.tasks).toStrictEqual([
      { id: 1, title: "Learn Jest", completed: true },
    ]);
  });

  it("should be create a task", async () => {
    const mockTaskService = mock<TaskService>();

    const mockResponse: HttpResponse<TaskResponse> = {
      statusCode: 200,
      body: { id: 1, title: "Learn Jest", completed: true },
    };
    mockTaskService.createTask.mockResolvedValue(mockResponse);

    const taskUseCase = createTaskUseCase(mockTaskService);

    const task = await taskUseCase.execute({ title: "Learn Docker" });

    expect(task.body).toStrictEqual({
      id: 1,
      title: "Learn Jest",
      completed: true,
    });
  });

  it("should be update a task", async () => {
    const mockTaskService = mock<TaskService>();

    const mockResponse: HttpResponse<TaskResponse> = {
      statusCode: 200,
      body: { id: 1, title: "Learn Jest", completed: true },
    };
    mockTaskService.updateTask.mockResolvedValue(mockResponse);

    const taskUseCase = updateTaskUseCase(mockTaskService);

    const task = await taskUseCase.execute({ id: 1, title: "Learn Docker" });

    expect(task.body).toStrictEqual({
      id: 1,
      title: "Learn Jest",
      completed: true,
    });
  });

  it("should be delete a task", async () => {
    const mockTaskService = mock<TaskService>();

    const mockResponse: HttpResponse<TaskResponse> = {
      statusCode: 200,
      body: { id: 1, title: "Learn Jest", completed: true },
    };
    mockTaskService.deleteTask.mockResolvedValue(mockResponse);

    const taskUseCase = deleteTaskUseCase(mockTaskService);

    const task = await taskUseCase.execute({ id: 1, title: "Learn Docker" });

    expect(task.body).toStrictEqual({
      id: 1,
      title: "Learn Jest",
      completed: true,
    });
  });
});
