import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "./index";

describe("CustomButton", () => {
  it("renders custom Button Component", () => {
    render(<CustomButton>Test Button</CustomButton>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Test Button");

    fireEvent.click(buttonElement, { target: { innerHTML: "clicked me" } });
    expect(buttonElement).toHaveTextContent("clicked me");
  });
});
