import React, { useState } from "react";
import Timer from "./components/Timer";
import CircularProgressBar from "./components/CircularProgressBar";
import "./App.css";

const App = () => {
  const [phase, setPhase] = useState("waiting");
  const [workDuration, setWorkDuration] = useState(1500); // Default: 25 minutes
  const [breakDuration, setBreakDuration] = useState(300); // Default: 5 minutes
  const [currentTimer, setCurrentTimer] = useState(workDuration);

  const handleTimerEnd = () => {
    if (phase === "work") {
      setCurrentTimer(breakDuration); // Reset timer to break duration
      setPhase("break"); // Switch to break phase
    } else if (phase === "break") {
      setCurrentTimer(workDuration); // Reset timer to work duration
      setPhase("waiting"); // Return to waiting phase
    }
  };

  const renderContent = () => {
    if (phase === "waiting") {
      return (
        <div>
          <h2 className="phase-text">SET YOUR TIMER</h2>
          {/* Inputs for Work and Break Duration */}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="work-duration" style={{ fontSize: "1.2rem" }}>
              Work Duration (10–120 mins):
            </label>
            <input
              id="work-duration"
              type="number"
              min="10"
              max="120"
              value={workDuration / 60}
              onChange={(e) => setWorkDuration(e.target.value * 60)}
              className="input"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="break-duration" style={{ fontSize: "1.2rem" }}>
              Break Duration (1–30 mins):
            </label>
            <input
              id="break-duration"
              type="number"
              min="1"
              max="30"
              value={breakDuration / 60}
              onChange={(e) => setBreakDuration(e.target.value * 60)}
              className="input"
            />
          </div>
          <CircularProgressBar progress={0} phase="waiting" />
          <button
            onClick={() => {
              setCurrentTimer(workDuration);
              setPhase("work");
            }}
            className="start-button"
          >
            start
          </button>
        </div>
      );
    }
  
    if (phase === "work") {
      const progress = ((workDuration - currentTimer) / workDuration) * 100;
  
      return (
        <div>
          <h2 className="phase-text">STUDY TIME!</h2>
          <Timer duration={currentTimer} onEnd={handleTimerEnd} />
          <CircularProgressBar progress={progress} phase="work" />
          <div className="button-container">
            <button
              onClick={() => {
                setCurrentTimer(breakDuration);
                setPhase("break");
              }}
              className="early-break-button"
            >
              early break
            </button>
            <button
              onClick={() => setPhase("waiting")}
              className="stop-button"
            >
              stop
            </button>
          </div>
        </div>
      );
    }
  
    if (phase === "break") {
      const progress = ((breakDuration - currentTimer) / breakDuration) * 100;
  
      return (
        <div>
          <h2 className="phase-text">BREAK TIME!</h2>
          <Timer duration={currentTimer} onEnd={handleTimerEnd} />
          <CircularProgressBar progress={progress} phase="break" />
          <div className="button-container">
            <button
              onClick={() => {
                setCurrentTimer(workDuration);
                setPhase("waiting");
              }}
              className="start-button"
            >
              start
            </button>
            <button
              onClick={() => setPhase("waiting")}
              className="stop-button"
            >
              stop
            </button>
          </div>
        </div>
      );
    }
  };
  

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      {renderContent()}
    </div>
  );
};

export default App;
