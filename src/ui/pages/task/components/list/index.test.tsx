import { render, screen } from "@testing-library/react";
import { List } from ".";
import { Task } from "../../../../../domain/entities/task";
import userEvent from "@testing-library/user-event";

describe("<List />", () => {
  const mockData: Task[] = [
    {
      id: 1,
      title: "Learn Docker",
      completed: false,
    },
  ];

  const mockOnUpdateItem = jest.fn();
  const mockOnDeleteItem = jest.fn();

  it("should be render list correctly", () => {
    render(
      <List
        data={mockData}
        onUpdateItem={mockOnUpdateItem}
        onDeleteItem={mockOnDeleteItem}
      />
    );
    expect(screen.getByText(/learn docker/i)).toBeInTheDocument();
    expect(screen.getByTestId("checkbox")).not.toBeChecked();
  });

  it("should be call actions list correctly", () => {
    render(
      <List
        data={mockData}
        onUpdateItem={mockOnUpdateItem}
        onDeleteItem={mockOnDeleteItem}
      />
    );
    userEvent.click(screen.getByTestId("checkbox"));
    userEvent.click(screen.getByTestId("delete-icon"));
    expect(mockOnUpdateItem).toHaveBeenCalled();
    expect(mockOnDeleteItem).toHaveBeenCalled();
  });
});
