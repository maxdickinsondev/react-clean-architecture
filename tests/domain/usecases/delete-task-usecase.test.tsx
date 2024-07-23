import { mock } from "jest-mock-extended";
import {
  TaskResponse,
  TaskService,
} from "../../../src/domain/contracts/services/task-service-contract";
import { deleteTaskUseCase } from "../../../src/domain/usecases/delete-task-usecase";
import { HttpResponse } from "../../../src/presentation/protocols/http";

describe("UpdateTaskUseCase", () => {
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
