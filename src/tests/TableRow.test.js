import React from "react";
import { shallow, mount, render } from "enzyme";
import TableRow from "../components/TableRow";

const defaultProps = {
  value: 12,
  category: "test",
  subcategory: "test",
  id: 1,
  showEditForm: false,
  isMobile: false,
};

describe("<TableRow />", () => {
  const setup = buildSetup(TableRow, defaultProps);

  it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("doesn't render button on mobile", () => {
    const wrapper = setup({ isMobile: true });
    expect(wrapper.find(".spending-details__edit-button")).toHaveLength(0);
  });

  it("calls useEffect on isMobile change", () => {
    const spy = jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    // const wrapper = shallow(
    //   <table>
    //     <tbody>
    //       <TableRow {...defaultProps} />
    //     </tbody>
    //   </table>
    // );
    const wrapper = render(<TableRow {...defaultProps} />);
    wrapper.setProps({ isMobile: true });
    wrapper.setProps({ isMobile: false });
    expect(spy).toBeCalled();
    spy.mockClear();
    spy.mockRestore();
  });
});
