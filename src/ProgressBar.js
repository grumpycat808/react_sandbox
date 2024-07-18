import React from "react";
import "./styles.css";
function ProgressBar({ percentage }) {
  const progressBarStyle = {
    width: `${percentage}%`,

    animationDuration: "2s",
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
