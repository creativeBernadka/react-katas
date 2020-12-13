import React from "react";
import { shallow } from "enzyme";

global.buildSetup = (TestComponent, props = {}) => (override = {}) =>
  shallow(<TestComponent {...props} {...override} />);
