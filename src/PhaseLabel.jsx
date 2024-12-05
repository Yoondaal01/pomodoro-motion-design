import React from "react";
import "./PhaseLabel.css";

const PhaseLabel = ({ phase }) => {
  const labels = {
    waiting: "",
    studying: "STUDY TIME!",
    break: "BREAK TIME!",
  };

  return (
    <h1 style={{ fontSize: "1.5rem", color: "#ff9999" }}>{labels[phase]}</h1>
  );
};

export default PhaseLabel;
