import { render, screen } from "@testing-library/react";
import { NotFound } from ".";

describe("<NotFound />", () => {
  it("should be render not found page", () => {
    render(<NotFound />);
    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });
});
