import React from "react";

const AnimationStage = ({ phase }) => {
  return (
    <div className="animation-stage">
      {phase === "waiting" && <p>⏳ Waiting to Start</p>}
      {phase === "work" && <p>💼 Working...</p>}
      {phase === "break" && <p>🎉 Break Time!</p>}
    </div>
  );
};

export default AnimationStage;
