import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("Header", () => {
  describe("Blinkist Logo", () => {
    test("render Blinkist Logo", () => {
      render(<MockHeader />);
      const blinkistLogo = screen.getByTestId("blinkist-logo");
      expect(blinkistLogo).toBeInTheDocument();
    });
  });
  describe("Explore Button Functionality in  header", () => {
    test("presence of explore button in header", () => {
      render(<MockHeader />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveTextContent("Explore");
      expect(buttonElement).toBeInTheDocument();
    });

    test("should contain 18 explore items", async () => {
      render(<MockHeader />);
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);

      const exploreContentElements = await screen.findAllByTestId(
        "explore-item"
      );
      expect(exploreContentElements.length).toBe(18);
    });

    // test("onClicking explore category element should navigate to that category", async () => {
    //   render(<MockHeader />);
    //   const buttonElement = screen.getByRole("button");
    //   fireEvent.click(buttonElement);

    //   const entrepreneurshipCategoryElement = await screen.findByText(
    //     "Entrepreneurship"
    //   );
    //   userEvent.click(entrepreneurshipCategoryElement);
    //   const bannerElement = await screen.findByText(
    //     "Explore Books on entrepreneurship"
    //   );
    //   expect(bannerElement).toBeInTheDocument();
    // });
  });
  describe("MyLibrary", () => {
    it("renders MyLibrary", () => {
      render(<MockHeader />);
      const myLibraryElement = screen.getByText("My Library");
      expect(myLibraryElement).toBeInTheDocument();
    });
  });
});
