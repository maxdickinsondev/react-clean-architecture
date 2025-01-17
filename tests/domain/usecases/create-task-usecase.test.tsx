import { mock } from "jest-mock-extended";
import {
  TaskResponse,
  TaskService,
} from "../../../src/domain/contracts/services/task-service-contract";
import { createTaskUseCase } from "../../../src/domain/usecases/create-task-usecase";
import { HttpResponse } from "../../../src/presentation/protocols/http";

describe("CreateTaskUseCase", () => {
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
});
