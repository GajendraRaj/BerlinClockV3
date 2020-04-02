import React from "react";
import PropTypes from "prop-types";
import Minute from "./Minute";

const Minutes = props => {
  return (
    <div>
      {props.minutes.map((minute, i) => (
        <div key={i} className="hours">
          {minute &&
            minute
              .split("")
              .map((m, idx) => <Minute id={idx} minute={m} rowId={i} />)}
        </div>
      ))}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired
};

export default Minutes;
