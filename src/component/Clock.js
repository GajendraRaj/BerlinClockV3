import React, { useState, useEffect } from "react";
import Constants from "../constant";
import BerlinClock from "./BerlinClock";
import StandardClock from "./StandardClock";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(startClock(new Date()));
    }, 1000);
  });

  const startClock = date => {
    const h = date.getHours();
    const m = formatMinutesOrSeconds(date.getMinutes());
    const s = formatMinutesOrSeconds(date.getSeconds());

    return `${h}:${m}:${s}`;
  };

  const formatMinutesOrSeconds = minutesOrSeconds => {
    return minutesOrSeconds < 10
      ? `0${minutesOrSeconds}`
      : `${minutesOrSeconds}`;
  };

  return (
    <div className="App">
      <h1>{Constants.APP_TITLE}</h1>
      <BerlinClock time={time} />
      <StandardClock time={time} />
    </div>
  );
};

export default Clock;
