import { render, screen } from "@testing-library/react";
import { Task } from ".";
import { useTask } from "../../../presentation/hooks/useTask";
import userEvent from "@testing-library/user-event";

jest.mock("../../../presentation/hooks/useTask");

const mockedUseTask = useTask as jest.MockedFunction<typeof useTask>;

describe("<Task />", () => {
  it("should be render task page correctly", async () => {
    mockedUseTask.mockReturnValue({
      task: "",
      tasks: [],
      onClearTask: jest.fn(),
      onChangeTask: jest.fn(),
      onGetTasks: jest.fn(),
      onDeleteTask: jest.fn(),
      onUpdateTask: jest.fn(),
      onCreateTask: jest.fn(),
    });

    render(<Task />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByText(/adicionar/i)).toBeInTheDocument();
  });

  it("should render the form and handle task creation", async () => {
    const mockOnChangeTask = jest.fn();
    const mockOnCreateTask = jest.fn();

    mockedUseTask.mockReturnValue({
      task: "",
      tasks: [],
      onClearTask: jest.fn(),
      onChangeTask: mockOnChangeTask,
      onGetTasks: jest.fn(),
      onDeleteTask: jest.fn(),
      onUpdateTask: jest.fn(),
      onCreateTask: mockOnCreateTask,
    });

    render(<Task />);

    const input = screen.getByPlaceholderText(/informe sua tarefa/i);
    const button = screen.getByText(/Adicionar/i);

    userEvent.type(input, "New Task");
    userEvent.click(button);

    expect(mockOnChangeTask).toHaveBeenCalled();
    expect(mockOnCreateTask).toHaveBeenCalled();
  });

  it("should render tasks list when there are tasks", () => {
    mockedUseTask.mockReturnValue({
      task: "",
      tasks: [{ id: 1, title: "Learn Docker", completed: false }],
      onClearTask: jest.fn(),
      onChangeTask: jest.fn(),
      onGetTasks: jest.fn(),
      onDeleteTask: jest.fn(),
      onUpdateTask: jest.fn(),
      onCreateTask: jest.fn(),
    });

    render(<Task />);

    expect(screen.getByText("Learn Docker")).toBeInTheDocument();
    expect(screen.getByTestId("list")).toBeInTheDocument();
    expect(screen.queryByText(/ainda não há dados/i)).not.toBeInTheDocument();
  });

  it("should render empty state when there are not tasks", () => {
    mockedUseTask.mockReturnValue({
      task: "",
      tasks: [],
      onClearTask: jest.fn(),
      onChangeTask: jest.fn(),
      onGetTasks: jest.fn(),
      onDeleteTask: jest.fn(),
      onUpdateTask: jest.fn(),
      onCreateTask: jest.fn(),
    });

    render(<Task />);

    expect(screen.queryByTestId("list")).not.toBeInTheDocument();
    expect(screen.getByText(/ainda não há dados/i)).toBeInTheDocument();
  });
});
