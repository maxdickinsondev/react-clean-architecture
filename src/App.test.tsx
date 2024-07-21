import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders task page", () => {
  render(<App />);
  const mainContent = screen.getByRole("main");
  expect(mainContent).toBeInTheDocument();
});
