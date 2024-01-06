import React from "react";

import { TreeNode } from "../types/basicTree";
import _ from "lodash";
import BlockDetails, { TreeNodeWithoutChildren } from "./BlockDetails";
import ChildArrow from "./ChildArrow";

export interface BlockProps {
  id: string;
  children?: BlockProps[];
}

/***
 * Recursively renders blocks of tree nodes
 */
const Block: React.FC<{ node: TreeNode; level?: number }> = ({
  node,
  level = 0,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const indentation = "20";
  const nodeOmittingChildren: TreeNodeWithoutChildren = _.omit(
    node,
    "children",
  );

  return (
    <div key={`Block-${node.id}`}>
      <BlockDetails {...{ nodeOmittingChildren }} />
      {hasChildren && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            position: "relative",
            marginLeft: `${indentation}px`, // Adjust indentation
          }}
        >
          {/* <ChildArrow /> */}
          {node.children?.map((child) => (
            <div key={`BlockChild-${child.id}`}>
              <Block node={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Block;
