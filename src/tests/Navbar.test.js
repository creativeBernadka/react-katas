import React from "react";
import { shallow, mount, render } from "enzyme";
// import { expect, to, find } from "jest";
import Navbar from "../components/Navbar";

describe("<Navbar />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders two <li> elements", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("li")).toHaveLength(2);
  });

  it("renders 'Home' <li> element", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("li").first().text()).toBe("Home");
  });

  it("renders 'Spendings' <li> element", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("li").last().text()).toBe("Spendings");
  });

  it("adds '.-selected' class to clicked <li>", () => {
    const wrapper = shallow(<Navbar />);
    const spendingsElement = wrapper.find("li").last();
    spendingsElement.props().onClick();
    expect(wrapper.find("li").last().hasClass("-selected")).toBe(true);
  });
});
