import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Explore from ".";

const MockExplore = () => {
  return (
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
  );
};

describe("Explore DropDown", () => {
  // it("renders Explore component", ()=>{
  //     render(<MockExplore/>);

  //     const
  // })
  test("should contain Politics  element", async () => {
    render(<MockExplore />);

    const exploreContentElement = await screen.findByText("Politics");
    expect(exploreContentElement).toBeInTheDocument();
  });

  test("should contain 18 explore items", async () => {
    render(<MockExplore />);

    const exploreContentElements = await screen.findAllByTestId("explore-item");
    expect(exploreContentElements.length).toBe(18);
  });
});
