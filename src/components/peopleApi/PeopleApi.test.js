import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PeopleApi from "./PeopleApi";
import axios from "axios";
// describe("People Api component", () => {
//   it("should render people list", async () => {
//     render(
//       <BrowserRouter>
//         <PeopleApi />{" "}
//       </BrowserRouter>
//     );
//     const personEl = await screen.findByTestId("person-1");
//     expect(personEl).toBeInTheDocument();
//   });

//   it("should render people count", async () => {
//     render(
//       <BrowserRouter>
//         <PeopleApi />{" "}
//       </BrowserRouter>
//     );
//     const personsEl = await screen.findAllByTestId(/person-/i);

//     expect(personsEl.length).toBe(10);
//   });
// });

jest.mock("axios");

describe("PeopleApi component", () => {
  it("renders a list of people", async () => {
    // Set up mocked data
    const people = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];
    axios.get.mockResolvedValue({ data: people });

    // Render component
    render(
      <BrowserRouter>
        <PeopleApi />{" "}
      </BrowserRouter>
    );

    const firstPerson = await waitFor(() => screen.getByTestId(`person-1`));
    const secondPerson = await waitFor(() => screen.getByTestId(`person-2`));

    expect(firstPerson).toHaveTextContent("John Doe -- 1");
    expect(secondPerson).toHaveTextContent("Jane Doe -- 2");
  });
});
