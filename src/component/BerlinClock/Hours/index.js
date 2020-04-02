import React from "react";
import PropTypes from "prop-types";
import constants from "../../../constant";

const Hours = props => {
  const hourColor = hour =>
    hour === constants.ACTIVE_HOURS_COLOR
      ? constants.RED_STYLE_CLASS
      : constants.OFF_STYLE_CLASS;

  return (
    <div>
      {props.hours.map((hour, i) => (
        <div key={i} className={constants.HOURS_STYLE_CLASS}>
          {hour &&
            hour
              .split("")
              .map((h, idx) => (
                <div
                  key={idx}
                  className={`${constants.HOURS_ROWS_STYLE_CLASS} ${hourColor(
                    h
                  )}`}
                  style={{ width: "25%" }}
                />
              ))}
        </div>
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired
};

export default Hours;
