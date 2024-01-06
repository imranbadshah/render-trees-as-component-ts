export type TreeNodeId = string;

export interface TreeNode {
  id: TreeNodeId;
  children?: TreeNode[];
  // Generalized for any type of tree node
  [key: string]: any;
}
