import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../../component/BerlinClock";
import Seconds from "../../component/BerlinClock/Seconds";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock />);
  });

  it("Should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should render the Seconds component", () => {
    expect(wrapper.containsMatchingElement(<Seconds />)).toEqual(true);
  });
});
