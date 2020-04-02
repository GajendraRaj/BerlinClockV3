import React from "react";
import PropTypes from "prop-types";
import constants from "../../../../constant";

const Minute = props => {
  const minuteColor = minute =>
    minute === constants.ACTIVE_MINUTES_COLOR
      ? constants.ACTIVE_STYLE_CLASS
      : constants.OFF_STYLE_CLASS;

  return (
    <div
      key={props.id}
      className={`hours-rows ${minuteColor(props.minute)}`}
      style={{
        width: props.rowId === 0 ? "9%" : "25%"
      }}
    />
  );
};

Minute.propTypes = {
  id: PropTypes.number.isRequired,
  minute: PropTypes.string.isRequired,
  rowId: PropTypes.number.isRequired
};

export default Minute;
