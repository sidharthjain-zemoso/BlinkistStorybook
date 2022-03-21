import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./index";
import NavSection from "../../molecules/NavSection";

describe("Footer", () => {
  it("renders Footer Component", () => {
    render(<Footer />);
    const element = screen.getByText(
      "Big ideas in small packages. Start learning now"
    );
    expect(element).toBeInTheDocument();
  });
  it("checks if Copyright text component is present", () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(
      "© Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies"
    );
    expect(copyrightElement).toBeInTheDocument();
  });
});
