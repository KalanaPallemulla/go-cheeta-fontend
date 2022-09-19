import { render, screen } from "@testing-library/react";
// import App from './App';
import HomeView from "./client/Home/index";
test("renders learn react link", () => {
  render(<HomeView />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
