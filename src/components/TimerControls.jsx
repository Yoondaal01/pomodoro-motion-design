import React from "react";

const TimerControls = ({ phase, onEarlyBreak, onLeave }) => {
  return (
    <div className="timer-controls">
      {phase === "work" && (
        <>
          <button onClick={onEarlyBreak}>Take Break Early</button>
          <button onClick={onLeave}>Leave</button>
        </>
      )}
      {phase === "break" && <button onClick={onLeave}>Leave</button>}
    </div>
  );
};

export default TimerControls;
