//testy na methods passed to child components
import React from "react";
import { shallow, mount, render } from "enzyme";
import SpendingDetails from "../components/SpendingsDetails";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useHistory: () => ({ push: jest.fn() }),
  useParams: () => ({ date: "2020-12-05" }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("<SpendingDetails />", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore({});
  });

  it("shows edit form on row click", () => {
    const initialState = {
      spendings: [
        {
          date: "2020-12-05",
          category: {
            name: "",
            subcategoryName: "",
          },
          spendingValues: [""],
          id: "",
        },
      ],
    };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <SpendingDetails />
      </Provider>
    );
    const firstButon = wrapper.find(".spending-details__edit-button").first();
    firstButon.simulate("click");
    expect(wrapper.find("SpendingsForm")).toHaveLength(1);
  });
});
