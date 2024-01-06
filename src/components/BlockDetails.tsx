import React, { useState } from "react";

import { TreeNode } from "../types/basicTree";

export type TreeNodeWithoutChildren = Omit<TreeNode, "children">;

const BlockDetails: React.FC<{
  nodeOmittingChildren: TreeNodeWithoutChildren;
}> = ({ nodeOmittingChildren }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "max-content",
        borderRadius: "6px",
        fontFamily: "sans-serif",
      }}
      onClick={toggleExpanded}
    >
      {Object.entries(nodeOmittingChildren).map(([key, value]) => {
        if (expanded) {
          return (
            <div
              key={`BlockDetail-${nodeOmittingChildren.id}-${key}`}
            >{`${key}: ${JSON.stringify(value)}`}</div>
          );
        }
        return (
          <div
            key={`BlockDetail-${nodeOmittingChildren.id}-${key}`}
          >{`${key}: ${value}`}</div>
        );
      })}
    </div>
  );
};

export default BlockDetails;
