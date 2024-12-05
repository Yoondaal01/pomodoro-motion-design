import React from 'react';

const CircularProgressBar = ({ timeLeft, totalTime }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / totalTime) * 100;

  return (
    <svg width="200" height="200">
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
        stroke="#4caf50"
        strokeWidth="10"
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference - (progress / 100) * circumference}
        style={{ transition: 'stroke-dashoffset 1s linear' }}
      />
    </svg>
  );
};

export default CircularProgressBar;
