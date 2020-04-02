import React from "react";
import { shallow } from "enzyme";
import Minutes from "../../../component/BerlinClock/Minutes";

describe("Minutes component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Minutes />);
  });

  it("Should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
