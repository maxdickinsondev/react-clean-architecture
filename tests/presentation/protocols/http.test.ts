import { Task } from "../../../src/domain/entities/task";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "../../../src/presentation/protocols/http";
import { TaskListResponse } from "../../../src/domain/contracts/services/task-service-contract";

describe("http", () => {
  it("should be return http response correctly", async () => {
    const mockHttpClientBody: Task[] = [
      { id: 1, title: "Learn Jest", completed: true },
    ];
    const mockHttpClient: HttpClient = {
      async request<T = any>(request: HttpRequest): Promise<HttpResponse<T>> {
        return Promise.resolve({
          statusCode: 200,
          body: { tasks: mockHttpClientBody } as unknown as T,
        });
      },
    };
    const response = await mockHttpClient.request<TaskListResponse>({
      url: "/tasks",
      method: "get",
    });
    expect(response?.body?.tasks).toHaveLength(1);
  });
});
