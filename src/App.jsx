import React, { useState } from "react";
import Timer from "./components/Timer";
import { motion } from "framer-motion";

const App = () => {
  const [phase, setPhase] = useState("waiting"); // "waiting", "work", "break"
  const [workDuration, setWorkDuration] = useState(25); // in minutes
  const [breakDuration, setBreakDuration] = useState(5); // in minutes

  // Define outer background colors for each phase
  const backgroundColors = {
    waiting: "#f4f4f4", // Light gray for waiting phase
    work: "#FFEBEE",    // Soft red for work phase
    break: "#E8F5E9",   // Light green for break phase
  };

  return (
    <motion.div
      initial={{ backgroundColor: backgroundColors.waiting }}
      animate={{ backgroundColor: backgroundColors[phase] }}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it stays behind other content
      }}
    >
      <div className="app">
        {phase === "waiting" ? (
          <div className="timer-setup">
            {/* Work Duration Slider */}
            <div className="slider-container">
              <label htmlFor="work-slider">
                Work Duration: {workDuration} minutes
              </label>
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
              <label htmlFor="break-slider">
                Break Duration: {breakDuration} minutes
              </label>
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

            {/* Start Button */}
            <button onClick={() => setPhase("work")}>Start Timer</button>
          </div>
        ) : (
          <Timer
            phase={phase}
            setPhase={setPhase}
            workDuration={workDuration}
            breakDuration={breakDuration}
          />
        )}
      </div>
    </motion.div>
  );
};

export default App;
