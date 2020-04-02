import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../../component/BerlinClock";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock />);
  });

  it("Should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
