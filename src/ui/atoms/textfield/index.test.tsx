import { render, screen } from "@testing-library/react";
import { TextField } from ".";
import userEvent from "@testing-library/user-event";

describe("<TextField />", () => {
  it("should be render textfield correctly", () => {
    render(<TextField placeholder="Type your task" />);
    expect(screen.getByPlaceholderText(/type your task/i)).toBeInTheDocument();
  });

  it("should be change textfield correctly", () => {
    render(<TextField placeholder="Type your task" />);
    const textField = screen.getByPlaceholderText(/type your task/i);
    userEvent.type(textField, "Learn React");
    expect(textField).toHaveValue("Learn React");
  });
});
