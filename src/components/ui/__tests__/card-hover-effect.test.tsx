import React from "react";
import { render, screen } from "@testing-library/react";
import { HoverEffect } from "../card-hover-effect";

describe("HoverEffect", () => {
  const items = [
    { title: "Card One", description: "Description One", link: "/one" },
    { title: "Card Two", description: "Description Two", link: "/two" },
  ];

  test("renders all card items", () => {
    render(<HoverEffect items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  test("hover effect works correctly", () => {
    const { container } = render(<HoverEffect items={items} />);
    const card = container.querySelector(".group");
    expect(card).toBeInTheDocument();
  });
  test("renders correctly with no items", () => {
    const { container } = render(<HoverEffect items={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
  
  test("navigates to the correct link on click", () => {
    render(<HoverEffect items={items} />);
    const link = screen.getByText("Card One").closest("a");
    expect(link).toHaveAttribute("href", "/one");
  });
  
});