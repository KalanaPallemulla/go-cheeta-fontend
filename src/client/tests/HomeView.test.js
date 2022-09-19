/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import HomeView from "../Home/index";

test("home screen view testing", () => {
  render(<HomeView />);

  screen.getByRole("");
});
