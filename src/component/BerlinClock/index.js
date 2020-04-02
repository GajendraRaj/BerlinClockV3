import React from "react";
import PropTypes from "prop-types";
import Seconds from "./Seconds";
import constants from "../../constant";
import Hours from "./Hours";

const BerlinClock = props => {
  const [hours, minutes, seconds] = props.time
    .split(":")
    .map(part => parseInt(part));

  const getSecondsColor = second => {
    const secondColor = isEvenSecond(second)
      ? constants.ACTIVE_COLOR
      : constants.OFF_COLOR;
    return secondColor;
  };

  const isEvenSecond = second => {
    const isEven = second % 2 === 0 ? true : false;
    return isEven;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSecondsColor(seconds)} />
      <Hours />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
