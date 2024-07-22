import { render, screen } from "@testing-library/react";
import { EmptyState } from ".";

describe("<Empty State />", () => {
  it("should be render empty state correctly", () => {
    render(<EmptyState />);
    expect(screen.getByText(/ainda não há dados/i)).toBeInTheDocument();
  });
});
