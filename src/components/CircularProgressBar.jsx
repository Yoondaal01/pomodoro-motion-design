import React from "react";

const CircularProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: `conic-gradient(#9EB888 ${progress}%, #EDEDED ${progress}% 100%)`,
        margin: "0 auto",
      }}
    >
      {/* Optional: Center Content (e.g., an icon or text) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        🕒
      </div>
    </div>
  );
};

export default CircularProgressBar;
