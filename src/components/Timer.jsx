import React, { useEffect, useState } from "react";

const Timer = ({ duration, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset the timer whenever the `duration` prop changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        fontSize: "3rem",
        color: "#9EB888",
        marginBottom: "20px",
      }}
    >
      {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
