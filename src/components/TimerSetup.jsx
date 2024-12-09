import React from "react";

const TimerSetup = ({ workDuration, breakDuration, setWorkDuration, setBreakDuration, onStart }) => {
  return (
    <div className="timer-setup">
      {/* Work Duration Slider */}
      <div className="slider-container">
        <label htmlFor="work-slider">Work Duration: {workDuration} minutes</label>
        <input
          id="work-slider"
          type="range"
          min="10"
          max="120"
          step="5"
          value={workDuration}
          onChange={(e) => setWorkDuration(Number(e.target.value))}
        />
      </div>

      {/* Break Duration Slider */}
      <div className="slider-container">
        <label htmlFor="break-slider">Break Duration: {breakDuration} minutes</label>
        <input
          id="break-slider"
          type="range"
          min="5"
          max="30"
          step="1"
          value={breakDuration}
          onChange={(e) => setBreakDuration(Number(e.target.value))}
        />
      </div>

      {/* Start Timer Button */}
      <button onClick={onStart}>Start Timer</button>
    </div>
  );
};

export default TimerSetup;
