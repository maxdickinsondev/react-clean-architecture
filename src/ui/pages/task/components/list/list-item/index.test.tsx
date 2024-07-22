import { render, screen } from "@testing-library/react";
import { ListItem } from ".";
import { ListItemProps } from "./types";
import userEvent from "@testing-library/user-event";

const setup = ({ ...rest }: ListItemProps) => {
  render(<ListItem {...rest} />);
};

describe("<ListItem />", () => {
  const mockOnCheckItem = jest.fn();
  const mockOnDeleteItem = jest.fn();

  it("should be render list item correctly", () => {
    setup({
      title: "Learn Docker",
      checked: false,
      onCheckItem: mockOnCheckItem,
      onDeleteItem: mockOnDeleteItem,
    });
    expect(screen.getByTestId("checkbox")).not.toBeChecked();
    expect(screen.getByText(/learn docker/i)).toBeInTheDocument();
  });

  it("should be call events list item correctly", () => {
    setup({
      title: "Learn Docker",
      checked: true,
      onCheckItem: mockOnCheckItem,
      onDeleteItem: mockOnDeleteItem,
    });

    const checkbox = screen.getByTestId("checkbox");
    const deleteIcon = screen.getByTestId("delete-icon");
    userEvent.click(checkbox);
    userEvent.click(deleteIcon);
    expect(checkbox).toBeChecked();
    expect(mockOnCheckItem).toHaveBeenCalled();
    expect(mockOnDeleteItem).toHaveBeenCalled();
  });

  it("should be render line through when item checked", () => {
    setup({
      title: "Learn Docker",
      checked: true,
      onCheckItem: mockOnCheckItem,
      onDeleteItem: mockOnDeleteItem,
    });
    expect(screen.getByText(/learn docker/i)).toHaveClass("line-through");
  });
});
