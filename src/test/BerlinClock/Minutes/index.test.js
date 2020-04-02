import React from "react";
import { shallow } from "enzyme";
import Minutes from "../../../component/BerlinClock/Minutes";
import checkPropTypes from "check-prop-types";

describe("Minutes component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Minutes minutes={["MMMMMMOOOOO"]} />);
  });

  it("Should render a upper minutes row", () => {
    expect(wrapper.find(".hours")).toHaveLength(1);
  });

  it("Should render 11 Minute components in upper hours row", () => {
    expect(wrapper.find("Minute")).toHaveLength(11);
  });

  it("Should throw error message if there is no minutes prop", () => {
    const errorMsg =
      "Failed prop type: The prop `minutes` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minutes.propTypes,
      { minutes: undefined },
      "prop",
      Minutes.minutes
    );

    expect(result).toEqual(errorMsg);
  });
});
