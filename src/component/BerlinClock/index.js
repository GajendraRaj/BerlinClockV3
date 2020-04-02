import React from "react";
import PropTypes from "prop-types";
import Seconds from "./Seconds";
import Constants from "../../constant";

const BerlinClock = props => {
  const [hours, minutes, seconds] = props.time
    .split(":")
    .map(number => parseInt(number));

  const getSecondsColor = second => {
    const secondColor = isEvenSecond(second) ? Constants.ACTIVE_COLOR : "";
    return secondColor;
  };

  const isEvenSecond = second => {
    const isEven = second % 2 === 0 ? true : false;
    return isEven;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSecondsColor(seconds)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
