import React from "react";
import { motion } from "framer-motion";

const ProgressCircle = ({ timeLeft, totalTime }) => {
  const radius = 90; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = (timeLeft / totalTime) * circumference;

  return (
    <motion.svg
      width="200"
      height="200"
      initial={{ rotate: -90 }}
      animate={{ rotate: -90 }}
      style={{ originX: "50%", originY: "50%" }}
    >
      {/* Full background circle */}
      <circle
        cx="100"
        cy="100"
        r={radius}
        stroke="#ddd"
        strokeWidth="10"
        fill="none"
      />
      {/* Animated progress circle */}
      <motion.circle
        cx="100"
        cy="100"
        r={radius}
        stroke="#8EBC82"
        strokeWidth="15"
        fill="none"
        strokeDasharray={circumference} // Total length of the circle
        strokeDashoffset={circumference} // Start from full circle
        animate={{ strokeDashoffset: progress }} // Animate to current progress
        transition={{ duration: 1, ease: "linear" }}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default ProgressCircle;
