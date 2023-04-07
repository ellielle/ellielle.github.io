import React from "react";

const MagicCircle: React.FC = () => {
  // TODO edit circle's styling and animation
  // TODO trying passing the logo element in as a child and using this as wrapper
  return (
    <div className="top-0 left-0">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path
          d="M381 115.23L89.07 327.29h360.85L157.99 115.23l111.5 343.12z"
          fill="none"
          stroke="#1a1a1a"
          stroke-width="25"
        />
        <circle cx="269.5" cy="269.5" r="237.5" fill="none" stroke="#fff" stroke-width="32" />
      </svg>
    </div>
  );
};

export default MagicCircle;
