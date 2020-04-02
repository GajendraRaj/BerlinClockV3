import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../../component/BerlinClock";
import Seconds from "../../component/BerlinClock/Seconds";
import Hours from "../../component/BerlinClock/Hours";
import checkPropTypes from "check-prop-types";
import constants from "../../constant";
import Minutes from "../../component/BerlinClock/Minutes";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"15:33:12"} />);
  });

  it("Should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should render the Seconds component", () => {
    expect(wrapper.containsMatchingElement(<Seconds />)).toEqual(true);
  });

  it("Should pass Y as props value for even second value", () => {
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual(constants.ACTIVE_COLOR);
  });

  it("Should pass O as props value for odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"15:33:13"} />);
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual(constants.OFF_COLOR);
  });

  it("Should render the Hours component", () => {
    expect(wrapper.containsMatchingElement(<Hours />)).toEqual(true);
  });

  it("Should render the Minutes component", () => {
    expect(wrapper.containsMatchingElement(<Minutes />)).toEqual(true);
  });

  it("Should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: undefined },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: 12 },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});
