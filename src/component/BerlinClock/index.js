import React from "react";
import PropTypes from "prop-types";
import Seconds from "./Seconds";
import constants from "../../constant";
import Hours from "./Hours";
import Minutes from "./Minutes";

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

  const getHoursColor = hours => {
    const upperRowColors = getUpperHoursRowLampColors(hours);
    const lowerRowColors = getLowerHoursRowLampColors(hours);
    const hoursColors = [upperRowColors, lowerRowColors];

    return hoursColors;
  };

  const getUpperHoursRowLampColors = hours => {
    const upperRowColors =
      constants.ACTIVE_HOURS_COLOR.repeat(
        hours / constants.UPPER_ROW_BLOCK_VALUE
      ) +
      constants.OFF_COLOR.repeat(
        constants.RED_LAMPS_COUNT -
          parseInt(hours / constants.UPPER_ROW_BLOCK_VALUE)
      );

    return upperRowColors;
  };

  const getLowerHoursRowLampColors = hours => {
    const lowerRowColors =
      constants.ACTIVE_HOURS_COLOR.repeat(
        hours % constants.UPPER_ROW_BLOCK_VALUE
      ) +
      constants.OFF_COLOR.repeat(
        constants.RED_LAMPS_COUNT - (hours % constants.UPPER_ROW_BLOCK_VALUE)
      );

    return lowerRowColors;
  };

  const getMinutesColor = minutes => {
    const upperRowColors = getUpperMinutesRowLampColors(minutes);
    const minutesColors = [upperRowColors];

    return minutesColors;
  };

  const getUpperMinutesRowLampColors = minutes => {
    const upperRowColors =
      constants.ACTIVE_MINUTES_COLOR.repeat(
        minutes / constants.UPPER_ROW_BLOCK_VALUE
      ) +
      constants.OFF_COLOR.repeat(
        constants.YELLOW_UPPER_LAMPS_COUNT -
          parseInt(minutes / constants.UPPER_ROW_BLOCK_VALUE)
      );

    return upperRowColors;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSecondsColor(seconds)} />
      <Hours hours={getHoursColor(hours)} />
      <Minutes minutes={getMinutesColor(minutes)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
