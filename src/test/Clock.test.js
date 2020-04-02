import React from "react";
import { shallow } from "enzyme";
import Clock from "../component/Clock";
import BerlinClock from "../component/BerlinClock";
import StandardClock from "../component/StandardClock";
import constants from "../constant";

describe("Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Clock />);
  });

  it("Should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual(constants.APP_TITLE);
  });

  it("Should render the Berlin Clcok component", () => {
    expect(wrapper.containsMatchingElement(<BerlinClock />)).toEqual(true);
  });

  it("Should render the Standard Clcok component", () => {
    expect(wrapper.containsMatchingElement(<StandardClock />)).toEqual(true);
  });
});
