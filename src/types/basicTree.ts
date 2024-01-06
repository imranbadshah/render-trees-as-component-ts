export type TreeNodeId = string;

export interface TreeNode {
  id: TreeNodeId;
  name: string;
  children?: TreeNode[];
}
