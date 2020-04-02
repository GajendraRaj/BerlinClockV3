import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Seconds = props => {
  const secondsColor =
    props.seconds === Constants.ACTIVE_COLOR
      ? Constants.ACTIVE_STYLE_CLASS
      : "";

  return <div className={`${Constants.SECONDS_STYLE_CLASS} ${secondsColor}`} />;
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired
};

export default Seconds;
