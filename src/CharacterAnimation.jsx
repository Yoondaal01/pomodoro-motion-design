import React from "react";
import "./CharacterAnimation.css";

const CharacterAnimation = ({ phase }) => {
  const characterImages = {
    waiting: "/images/duck-happy.png",
    studying: "/images/duck-studying.png",
    break: "/images/duck-break.png",
  };

  return (
    <div className="character-animation">
      <img
        src={characterImages[phase]}
        alt={phase}
        style={{ width: "150px", height: "150px" }}
      />
    </div>
  );
};

export default CharacterAnimation;
