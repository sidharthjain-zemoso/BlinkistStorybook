import { render, screen } from "@testing-library/react";
import Logo from "./";

test("renders icon component", () => {
  render(<Logo url="res/logo/Blinklist.png" />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toMatchSnapshot();
});
