import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Minute from "../../../../component/BerlinClock/Minutes/Minute";

describe("Minute component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Minute id={1} minute={"Y"} rowId={1} />);
  });

  it("Should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should render yellow lamp", () => {
    expect(wrapper.find(".bg-yellow")).toHaveLength(1);
  });

  it("Should throw error message if there is no id prop", () => {
    const errorMsg =
      "Failed prop type: The prop `id` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minute.propTypes,
      { id: undefined, minute: "Y", rowId: 1 },
      "prop",
      Minute.id
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if there is no minute prop", () => {
    const errorMsg =
      "Failed prop type: The prop `minute` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minute.propTypes,
      { id: 1, minute: undefined, rowId: 1 },
      "prop",
      Minute.minute
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if there is no rowId prop", () => {
    const errorMsg =
      "Failed prop type: The prop `rowId` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minute.propTypes,
      { id: 1, minute: "Y", rowId: undefined },
      "prop",
      Minute.rowId
    );

    expect(result).toEqual(errorMsg);
  });
});
