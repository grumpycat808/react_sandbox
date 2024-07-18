import React from "react";
import "./styles.css";
function ProgressBar({ percentage, order }) {
  const progressBarStyle = {
    width: `0%`,
    animationDuration: "2s",
    animationDelay: `${order * 2}s`,
    animationName: "slidein",
    animationFillMode: "forwards",
  };
  return (
    <div className="progress-bar">
      <div className="progress-container" style={{ width: `${percentage}%` }}>
        <div style={progressBarStyle} className="percentage">
          {percentage}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
