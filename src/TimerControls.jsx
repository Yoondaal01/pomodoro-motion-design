import React from "react";
import "./TimerControls.css";

const TimerControls = ({
  phase,
  setPhase,
  timeLeft,
  setTimeLeft,
  timerDuration,
  breakDuration,
}) => {
  const handleStart = () => {
    if (phase === "waiting") setPhase("studying");
  };

  const handleStop = () => {
    setPhase("waiting");
    setTimeLeft(timerDuration);
  };

  const handleEarlyBreak = () => {
    if (phase === "studying") {
      setPhase("break");
      setTimeLeft(breakDuration);
    }
  };

  return (
    <div className="timer-controls">
      {phase === "waiting" && (
        <button onClick={handleStart} className="start-button">
          Start
        </button>
      )}
      {phase === "studying" && (
        <>
          <button onClick={handleEarlyBreak} className="early-break-button">
            Early Break
          </button>
          <button onClick={handleStop} className="stop-button">
            Stop
          </button>
        </>
      )}
      {phase === "break" && (
        <button onClick={handleStop} className="stop-button">
          Stop
        </button>
      )}
    </div>
  );
};

export default TimerControls;
