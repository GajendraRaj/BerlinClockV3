import React from "react";
import { shallow } from "enzyme";
import Clock from "../component/Clock";
import Constants from "../constant";

describe("Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Clock />);
  });

  it("Should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual(Constants.APP_TITLE);
  });
});
