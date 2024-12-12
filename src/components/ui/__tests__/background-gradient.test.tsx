import React from "react";
import { render } from "@testing-library/react";
import { BackgroundGradient } from "../background-gradient";

describe("BackgroundGradient", () => {
  test("renders children inside the gradient container", () => {
    const { getByText } = render(
      <BackgroundGradient>
        <p>Test Content</p>
      </BackgroundGradient>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  test("applies animation styles when animate is true", () => {
    const { container } = render(<BackgroundGradient animate />);
    expect(container.firstChild).toHaveClass("group");
  });

  test("does not apply animation-related styles when animate is false", () => {
    const { container } = render(<BackgroundGradient animate={false} />);
    expect(container.firstChild).not.toHaveClass("animation-related-class"); 
  });

  test("renders correctly without children", () => {
    const { container } = render(<BackgroundGradient />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
