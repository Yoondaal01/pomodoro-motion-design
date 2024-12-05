import React from "react";

const AnimatedCharacter = ({ phase }) => {
  const getCharacter = () => {
    if (phase === "waiting") {
      return "https://via.placeholder.com/80?text=🎉"; // Placeholder for waiting phase
    }
    if (phase === "work") {
      return "https://via.placeholder.com/80?text=📚"; // Placeholder for work phase
    }
    if (phase === "break") {
      return "https://via.placeholder.com/80?text=🏖️"; // Placeholder for break phase
    }
  };

  return (
    <img
      src={getCharacter()}
      alt={`${phase} character`}
      style={{
        width: "80px",
        height: "80px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
      }}
    />
  );
};

export default AnimatedCharacter;
