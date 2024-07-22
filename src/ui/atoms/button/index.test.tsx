import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  const mockOnClick = jest.fn();

  it("should be render button correctly", () => {
    render(<Button>Teste</Button>);
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });

  it("should be click button correctly", () => {
    render(<Button onClick={mockOnClick}>Teste</Button>);
    userEvent.click(screen.getByText(/teste/i));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
