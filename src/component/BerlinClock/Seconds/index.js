import React from "react";
import PropTypes from "prop-types";
import constants from "../../../constant";

const Seconds = props => {
  const secondsColor =
    props.seconds === constants.ACTIVE_COLOR
      ? constants.ACTIVE_STYLE_CLASS
      : constants.OFF_STYLE_CLASS;

  return <div className={`${constants.SECONDS_STYLE_CLASS} ${secondsColor}`} />;
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired
};

export default Seconds;
