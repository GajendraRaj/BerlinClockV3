import React from "react";
import PropTypes from "prop-types";
import constants from "../../../../constant";

const Hour = props => {
  const hourColor = hour =>
    hour === constants.ACTIVE_HOURS_COLOR
      ? constants.RED_STYLE_CLASS
      : constants.OFF_STYLE_CLASS;

  return (
    <div
      key={props.id}
      className={`${constants.HOURS_ROWS_STYLE_CLASS} ${hourColor(props.hour)}`}
      style={{ width: "25%" }}
    />
  );
};

Hour.propTypes = {
  id: PropTypes.number.isRequired,
  hour: PropTypes.string.isRequired
};

export default Hour;
