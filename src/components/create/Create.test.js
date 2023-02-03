import { render, screen, fireEvent } from "@testing-library/react";
import Create from "./Create";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("Create component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        name: "tommy",
        users: [],
      },
    });
  });

  it("dispatches setName action when input field changes", () => {
    render(
      <Provider store={store}>
        <Create />
      </Provider>
    );
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Bola" } });
    const action = store.getActions();
    expect(action[0].type).toBe("SET_NAME");
    expect(action[0].payload).toBe("Bola");
  });

  it("dispatches setUser action when form is submitted and dipatch SET_NAME afterwards to clean input field", () => {
    render(
      <Provider store={store}>
        <Create />
      </Provider>
    );
    const submitButton = screen.getByText("Submit");
    fireEvent.submit(submitButton);
    const action = store.getActions();
    expect(action[0].type).toBe("SET_USERS");
    expect(action[0].payload).toEqual({ id: 1, name: "tommy", status: false });
    expect(action[1].type).toBe("SET_NAME");
    expect(action[1].payload).toBe("");
  });
});
