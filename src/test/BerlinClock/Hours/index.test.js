import React from "react";
import { shallow } from "enzyme";
import constants from "../../../constant";
import checkPropTypes from "check-prop-types";
import Hours from "../../../component/BerlinClock/Hours";

describe("Hours component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hours hours={["RRRO"]} />);
  });

  it("Should render a hours row", () => {
    expect(wrapper.find(".hours")).toHaveLength(1);
  });

  it("Should render 4 lamps in upper hours row", () => {
    expect(wrapper.find(".hours-rows")).toHaveLength(4);
  });

  it("Should throw error message if there is no hours prop", () => {
    const errorMsg =
      "Failed prop type: The prop `hours` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hours.propTypes,
      { hours: undefined },
      "prop",
      Hours.hours
    );

    expect(result).toEqual(errorMsg);
  });
});
