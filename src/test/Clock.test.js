import React from "react";
import { shallow } from "enzyme";
import Clock from "../component/Clock";
import BerlinClock from "../component/BerlinClock";
import Constants from "../constant";

describe("Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Clock />);
  });

  it("Should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual(Constants.APP_TITLE);
  });

  it("Should render the Berlin Clcok component", () => {
    expect(wrapper.containsMatchingElement(<BerlinClock />)).toEqual(true);
  });
});
