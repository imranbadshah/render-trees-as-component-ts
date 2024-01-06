import { TreeNode } from "../types/basicTree";

export const treeData: TreeNode[] = [
  {
    id: "1",
    name: "Parent",
    children: [
      {
        id: "2",
        name: "Child 1",
        children: [
          {
            id: "4",
            name: "Child 1.1",
          },
          {
            id: "5",
            name: "Child 1.2",
          },
        ],
      },
      {
        id: "3",
        name: "Child 2",
      },
    ],
  },
  {
    id: "6",
    name: "Parent 2",
  },
];
