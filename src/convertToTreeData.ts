import { TreeNode } from "./types/basicTree";

export function convertToTreeData(data: any[]): TreeNode[] {
  const treeNodes: TreeNode[] = [];
  console.log({ data });

  // Process each item in the data array
  data.forEach((item: any) => {
    const { id, children, ...rest } = item;
    const newNode: TreeNode = {
      id,
      children: Array.isArray(children)
        ? convertToTreeData(children)
        : undefined,
      ...rest, // Preserve additional properties
    };
    treeNodes.push(newNode);
  });

  return treeNodes;
}
