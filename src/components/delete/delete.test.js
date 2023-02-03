import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Delete from "./Delete";

const mockStore = configureMockStore();

describe("Delete component", () => {
  let id;

  let store = mockStore({});

  it("should dispatch delete action", () => {
    render(
      <Provider store={store}>
        <Delete id={id} />
      </Provider>
    );
    let button = screen.getByRole("button");
    fireEvent.click(button);
    const action = store.getActions();
    expect(action[0].type).toBe("DELETE_USER");
  });
  it("should have delete Text", () => {
    render(
      <Provider store={store}>
        <Delete id={id} />
      </Provider>
    );
    let text = screen.getByText("Delete");
    expect(text.innerHTML).toBe("Delete");
  });
});
