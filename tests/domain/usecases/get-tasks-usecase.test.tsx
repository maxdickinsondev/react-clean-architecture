import { mock } from "jest-mock-extended";
import {
  TaskListResponse,
  TaskService,
} from "../../../src/domain/contracts/services/task-service-contract";
import { getTasksUseCase } from "../../../src/domain/usecases/get-tasks-usecase";
import { HttpResponse } from "../../../src/presentation/protocols/http";

describe("GetTasksUseCase", () => {
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
});
