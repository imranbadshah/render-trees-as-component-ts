import React, { useState } from "react";

import Block from "./components/Block";
import { convertToTreeData } from "./convertToTreeData";
import FileDropZone from "./components/FileDropZone";
import { TreeNode } from "./types/basicTree";
import { childrenByHasMemberReference } from "./childrenByHasMemberReference";

const App: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeNode[]>([]);

  const processFile = (file: any) => {
    if (file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        try {
          const jsonData = JSON.parse(event.target.result);
          setTreeData(
            convertToTreeData(jsonData, childrenByHasMemberReference),
          );
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    } else {
      console.error("Unsupported file type");
    }
  };

  if (!treeData.length) {
    return <FileDropZone processFile={processFile} />;
  }

  return (
    <>
      {treeData.map((node: any) => (
        <Block key={node.id} node={node} />
      ))}
    </>
  );
};

export default App;
