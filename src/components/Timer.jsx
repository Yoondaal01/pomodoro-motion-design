import React, { useState, useEffect } from "react";
import ProgressCircle from "./ProgressCircle";
import TimerControls from "./TimerControls";
import AnimationStage from "./AnimationStage";
import { motion } from "framer-motion";



const Timer = ({ phase, setPhase, workDuration, breakDuration }) => {
  const [timeLeft, setTimeLeft] = useState(
    phase === "work" ? workDuration * 60 : breakDuration * 60
  );

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
      if (phase === "work") {
        setPhase("break");
        setTimeLeft(breakDuration * 60);
      } else if (phase === "break") {
        setPhase("waiting");
      }
    }
    return () => clearInterval(timer);
  }, [timeLeft, phase, setPhase, breakDuration]);

  const handleEarlyBreak = () => {
    setPhase("break");
    setTimeLeft(breakDuration * 60);
  };

  return (
    <div className="timer">
      <div className="progress-container">
        {/* Progress Circle */}
        <div className="progress-wrapper">
          <ProgressCircle
            timeLeft={timeLeft}
            totalTime={phase === "work" ? workDuration * 60 : breakDuration * 60}
          />
          {/* Animation in the center */}
          <div className="animation-wrapper">
            <AnimationStage phase={phase} />
          </div>
        </div>
        <h1 className="timer-display">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
  </motion.div>
</h1>
      </div>
      {/* Buttons */}
      <TimerControls
        phase={phase}
        onEarlyBreak={handleEarlyBreak}
        onLeave={() => setPhase("waiting")}
      />
    </div>
  );
};

export default Timer;
