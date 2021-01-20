import React from "react";
import { shallow } from "enzyme";
import SpendingsForm from "../components/SpendingsForm";

describe("withSizes", () => {

  it("renders correctly", () => {
    const wrapper = shallow(<SpendingsForm />);
    expect(wrapper).toMatchSnapshot();
})
})
