import { getMovieRequest } from "./components/pages/UserVy";
import { render, screen } from "@testing-library/react";
import App from "./App";
require("@testing-library/react");

test("renders learn react link", async () => {
  render(<App />);
  const mockFetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ Search: [{ Title: "Test Movie" }] }),
  });
  global.fetch = mockFetch;

  const setMovies = jest.fn();
  await getMovieRequest("test", setMovies);

  expect(mockFetch).toHaveBeenCalledWith(
    "http://www.omdbapi.com/?s=test&apikey=de9c0cdf"
  );
  expect(setMovies).toHaveBeenCalledWith([{ Title: "Test Movie" }]);
});
