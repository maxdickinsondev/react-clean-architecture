import { ChangeEvent } from "react";
import { renderHook, act } from "@testing-library/react";
import { useTask } from "../../../src/presentation/hooks/useTask";
import axios from "axios";

const mockResponseSuccess = {
  status: 201,
  data: { tasks: [{ id: 1, title: "learn jest", completed: true }] },
};

const mockResponseFailure = {
  status: 500,
  message: "Internal Server Error",
};

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const consoleError = jest.spyOn(console, "error").mockImplementation();

describe("useTasks", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should be retrieve tasks and update the state", async () => {
    mockedAxios.request.mockResolvedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onGetTasks();
    });

    expect(result.current.tasks).toStrictEqual(mockResponseSuccess.data.tasks);
  });

  it("should be retrieve empty array when body is empty", async () => {
    mockedAxios.request.mockResolvedValue({
      ...mockResponseSuccess,
      data: {},
    });

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onGetTasks();
    });

    expect(result.current.tasks).toStrictEqual([]);
  });

  it("should be failure when try retrieve tasks", async () => {
    mockedAxios.request.mockRejectedValue(mockResponseFailure);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onGetTasks();
    });

    expect(consoleError).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(mockResponseFailure);
  });

  it("should be create task and update the state", async () => {
    mockedAxios.request.mockResolvedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onCreateTask({ title: "learn typescript" });
    });

    expect(result.current.tasks).toStrictEqual(mockResponseSuccess.data.tasks);
  });

  it("should be failure when try create a task", async () => {
    mockedAxios.request.mockRejectedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onCreateTask({ title: "learn typescript" });
    });

    expect(consoleError).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(mockResponseFailure);
  });

  it("should be update task and update the state", async () => {
    mockedAxios.request.mockResolvedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onUpdateTask(1, { title: "learn typescript" });
    });

    expect(result.current.tasks).toStrictEqual(mockResponseSuccess.data.tasks);
  });

  it("should be failure when try update a task", async () => {
    mockedAxios.request.mockRejectedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onUpdateTask(1, { title: "learn typescript" });
    });

    expect(consoleError).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(mockResponseFailure);
  });

  it("should be delete task and update the state", async () => {
    mockedAxios.request.mockResolvedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onDeleteTask(1);
    });

    expect(result.current.tasks).toStrictEqual(mockResponseSuccess.data.tasks);
  });

  it("should be failure when try delete a task", async () => {
    mockedAxios.request.mockRejectedValue(mockResponseSuccess);

    const { result } = renderHook(() => useTask());

    await act(async () => {
      await result.current.onDeleteTask(1);
    });

    expect(consoleError).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(mockResponseFailure);
  });

  it("should be update task input value", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.onChangeTask({
        target: { value: "New Task" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.task).toBe("New Task");
  });

  it("should clear task input value", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.onChangeTask({
        target: { value: "New Task" },
      } as ChangeEvent<HTMLInputElement>);
      result.current.onClearTask();
    });

    expect(result.current.task).toBe("");
  });
});
