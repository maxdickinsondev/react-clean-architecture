import axios from "axios";
import { axiosHttpClient } from "../../../src/infrastructure/http/axios-http-client";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("AxiosHttpClient", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /tasks", () => {
    it("should be get data", async () => {
      const mockResponse = {
        status: 200,
        data: { tasks: [{ id: 1, title: "my task", completed: false }] },
      };
      mockedAxios.request.mockResolvedValueOnce(mockResponse);

      const response = await axiosHttpClient.request({
        url: "/tasks",
        method: "get",
        body: undefined,
        headers: undefined,
      });

      expect(mockedAxios.request).toHaveBeenCalledWith({
        url: "http://localhost:3333/tasks",
        method: "get",
      });
      expect(response.statusCode).toEqual(200);
      expect(response.body).toStrictEqual({
        tasks: [{ id: 1, title: "my task", completed: false }],
      });
    });
  });

  describe("POST /tasks", () => {
    it("should be create data", async () => {
      const mockResponse = {
        status: 201,
        data: { task: { id: 1, title: "my task", completed: false } },
      };
      mockedAxios.request.mockResolvedValueOnce(mockResponse);

      const response = await axiosHttpClient.request({
        url: "/tasks",
        method: "post",
        body: { title: "my task" },
        headers: undefined,
      });

      expect(mockedAxios.request).toHaveBeenCalledWith({
        url: "http://localhost:3333/tasks",
        method: "post",
        data: { title: "my task" },
      });
      expect(response.statusCode).toEqual(201);
      expect(response.body).toStrictEqual({
        task: { id: 1, title: "my task", completed: false },
      });
    });
  });

  describe("PUT /tasks", () => {
    it("should be update data", async () => {
      const mockResponse = {
        status: 201,
        data: { task: { id: 1, title: "my task", completed: false } },
      };
      mockedAxios.request.mockResolvedValueOnce(mockResponse);

      const response = await axiosHttpClient.request({
        url: "/tasks/1",
        method: "put",
        body: { title: "my task" },
        headers: undefined,
      });

      expect(mockedAxios.request).toHaveBeenCalledWith({
        url: "http://localhost:3333/tasks/1",
        method: "put",
        data: { title: "my task" },
      });
      expect(response.statusCode).toEqual(201);
      expect(response.body).toStrictEqual({
        task: { id: 1, title: "my task", completed: false },
      });
    });
  });

  describe("DELETE /tasks", () => {
    it("should be update data", async () => {
      const mockResponse = {
        status: 201,
        data: { status: 201, message: "Task update with success." },
      };
      mockedAxios.request.mockResolvedValueOnce(mockResponse);

      const response = await axiosHttpClient.request({
        url: "/tasks/1",
        method: "delete",
        body: undefined,
        headers: undefined,
      });

      expect(mockedAxios.request).toHaveBeenCalledWith({
        url: "http://localhost:3333/tasks/1",
        method: "delete",
      });
      expect(response.statusCode).toEqual(201);
      expect(response.body).toStrictEqual({
        status: 201,
        message: "Task update with success.",
      });
    });
  });
});
