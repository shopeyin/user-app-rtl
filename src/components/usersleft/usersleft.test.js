import { render, screen } from "@testing-library/react";

import UsersLeft from "./UsersLeft";

describe("UsersLeft component", () => {
  const testUsers = [
    { id: 1, status: true, name: "User 1" },
    { id: 2, status: false, name: "User 2" },
    { id: 3, status: false, name: "User 3" },
    { id: 4, status: false, name: "User 4" },
  ];
  it("should display the correct number of remaining users", () => {
    render(<UsersLeft users={testUsers} />);
    const remainingUsers = screen.getByText("Number of users left 3");
    expect(remainingUsers).toBeInTheDocument();
  });
});
