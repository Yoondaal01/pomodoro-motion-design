import React from "react";
import "./CircularTimer.css";

const CircularTimer = ({ timeLeft, timerDuration, phase, setTimerDuration }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / timerDuration) * 100;

  const handleDragToSetTime = (event) => {
    if (phase !== "waiting") return;
    // Logic to calculate the drag angle and set timer duration
  };

  return (
    <svg
      width="200"
      height="200"
      onMouseMove={handleDragToSetTime}
      style={{ cursor: phase === "waiting" ? "pointer" : "default" }}
    >
      <circle
        cx="100"
        cy="100"
        r={radius}
        stroke="#ddd"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="100"
        cy="100"
        r={radius}
        stroke="#ff9999"
        strokeWidth="10"
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference - (progress / 100) * circumference}
        style={{ transition: "stroke-dashoffset 0.1s linear" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="1.5rem"
        fill="#6ebf4a"
      >
        {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
        {timeLeft % 60}
      </text>
    </svg>
  );
};

export default CircularTimer;
