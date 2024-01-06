import React from "react";

const ChildArrow: React.FC = () => {
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="0" x2="50" y2="35" stroke="black" />
      <line x1="50" y1="35" x2="100" y2="35" stroke="black" />
    </svg>
  );
};

export default ChildArrow;
