import React from "react";

import { TreeNode } from "../types/basicTree";

export type TreeNodeWithoutChildren = Omit<TreeNode, "children">;

const BlockDetails: React.FC<{
  nodeOmittingChildren: TreeNodeWithoutChildren;
}> = ({ nodeOmittingChildren }) => {
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
    >
      {Object.entries(nodeOmittingChildren).map(([key, value]) => {
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
