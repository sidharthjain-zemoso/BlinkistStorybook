import { render, screen } from "@testing-library/react";
import AvataarWithIcon from ".";

test("renders avatar with icon component", () => {
  render(<AvataarWithIcon>A</AvataarWithIcon>);

  const avatarElement = screen.getByTestId("account-avatar");
  const textElement = screen.getByText("A");
  expect(textElement).toBeDefined();
  expect(avatarElement).toMatchSnapshot();
});
