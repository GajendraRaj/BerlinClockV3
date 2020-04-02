import React from "react";
import PropTypes from "prop-types";
import constants from "../../../constant";
import Hour from "./Hour";

const Hours = props => {
  return (
    <div>
      {props.hours.map((hour, i) => (
        <div key={i} className={constants.HOURS_STYLE_CLASS}>
          {hour && hour.split("").map((h, idx) => <Hour id={idx} hour={h} />)}
        </div>
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired
};

export default Hours;
