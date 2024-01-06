import React from "react";

import { treeData } from "./resources/exampleTreeData";
import Block from "./components/Block";

const App: React.FC = () => {
  // Use treeData or dynamic data here
  return (
    <div>
      {treeData.map((node) => (
        <Block key={node.id} node={node} />
      ))}
    </div>
  );
};

export default App;
