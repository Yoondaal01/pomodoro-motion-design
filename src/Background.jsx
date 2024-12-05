import React from "react";
import "./Background.css";

const Background = ({ phase, children }) => {
  const colors = {
    waiting: "#f0f8ff",
    studying: "#ffebcd",
    break: "#d1ffd6",
  };

  return (
    <div
      style={{
        backgroundColor: colors[phase],
        transition: "background-color 0.5s",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Background;
