import { render, screen, waitFor, act } from "@testing-library/react";
import axios from "axios";
import PeopleProfile from "./PeopleProfile";
jest.mock("axios");
describe("People Profile component", () => {
  it("should display the correct name", async () => {
    axios.get.mockResolvedValueOnce({ data: { id: 1, name: "John Doe" } });
    render(<PeopleProfile />);

    await act(async () => {
      await waitFor(() => expect(axios.get).toHaveBeenCalled());
    });
    expect(screen.getByTestId("person").textContent).toBe("John Doe");
  });
});
