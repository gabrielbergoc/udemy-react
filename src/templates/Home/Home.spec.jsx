import { render, screen } from "@testing-library/react";
import Home from ".";

describe("<Home />", () => {
  it("renders a container", () => {
    render(<Home />);
    const homeContainer = screen.getByTestId("home-container");
    expect(homeContainer).toBeInTheDocument();
  });
});
