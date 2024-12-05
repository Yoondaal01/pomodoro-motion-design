import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const Timer = ({ timeLeft, setTimeLeft, phase, setPhase, breakDuration }) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setPhase(phase === 'studying' ? 'break' : 'studying');
            return phase === 'studying' ? breakDuration : 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, phase, setTimeLeft, breakDuration]);

  return (
    <div className="timer-controls">
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => {
        setIsRunning(false);
        setPhase('waiting');
        setTimeLeft(25 * 60);
      }}>Reset</button>
    </div>
  );
};

export default Timer;
