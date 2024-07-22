import { render, screen } from "@testing-library/react";
import { Form } from ".";
import { FormProps } from "./types";
import userEvent from "@testing-library/user-event";

const setup = ({ ...rest }: FormProps) => {
  render(<Form {...rest} />);
};

describe("<Form />", () => {
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();

  it("should be render form correctly", () => {
    setup({
      buttonText: "Salvar",
      value: "Learn TypeScript",
      onChange: mockOnChange,
      onClick: mockOnClick,
    });
    expect(screen.getByText(/salvar/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/informe sua tarefa/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/informe sua tarefa/i)).toHaveValue(
      "Learn TypeScript"
    );
  });

  it("should be change events correctly", () => {
    setup({
      buttonText: "Salvar",
      value: "Learn TypeScript",
      onChange: mockOnChange,
      onClick: mockOnClick,
    });
    const textField = screen.getByPlaceholderText(/informe sua tarefa/i);
    const button = screen.getByText(/salvar/i);
    userEvent.type(textField, "Learn Something");
    userEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
