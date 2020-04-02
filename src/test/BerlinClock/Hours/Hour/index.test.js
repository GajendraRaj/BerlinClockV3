import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Hour from "../../../../component/BerlinClock/Hours/Hour";

describe("Hour component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hour id={1} hour={"R"} />);
  });

  it("Should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should render red lamp", () => {
    expect(wrapper.find(".bg-red")).toHaveLength(1);
  });

  it("Should throw error message if there is no id prop", () => {
    const errorMsg =
      "Failed prop type: The prop `id` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hour.propTypes,
      { id: undefined, hour: "R" },
      "prop",
      Hour.id
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if there is no hour prop", () => {
    const errorMsg =
      "Failed prop type: The prop `hour` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hour.propTypes,
      { id: 1, hour: undefined },
      "prop",
      Hour.hour
    );

    expect(result).toEqual(errorMsg);
  });
});
