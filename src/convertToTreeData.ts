import * as _ from "lodash";

import { AdjacencyList, NodeMap, TreeNode } from "./types/basicTree";

function processChildren(
  data: any[],
  item: any,
  childrenIdentifier: string | ((data: any[], item: any) => any[] | undefined),
): TreeNode[] | undefined {
  if (typeof childrenIdentifier === "string") {
    return item[childrenIdentifier];
  }
  if (typeof childrenIdentifier === "function") {
    return childrenIdentifier(data, item);
  }
  return undefined;
}

function formAdjacencyList(
  data: any[],
  childrenIdentifier: string | ((data: any[], item: any) => any[] | undefined),
): AdjacencyList {
  const adjacencyList = new Map<string, string[]>(); // parent-to-children ids

  for (const item of data) {
    const { id } = item;
    const children = processChildren(data, item, childrenIdentifier);

    if (children == undefined) {
      adjacencyList.set(id, []);
      continue;
    }
    adjacencyList.set(
      id,
      children.map((child) => child["id"]),
    );
  }
  return adjacencyList;
  // console.log('ad', JSON.stringify(Array.from(adjacencyList)))
}

function nodesByIds(data: any[]): NodeMap {
  const nodeMap = new Map<string, any>();
  for (const node of data) {
    nodeMap.set(node.id, node);
  }
  return nodeMap;
}

function findRootNodeIds(nodeMap: NodeMap, adjacencyList: AdjacencyList) {
  const ids = Array.from(nodeMap.keys());
  const childIds = _.flatten(Array.from(adjacencyList.values()));
  const uniqueChildIds = new Set(childIds);
  return ids.filter((id) => !uniqueChildIds.has(id));
}

function constructTreeNode(
  id: string,
  nodeMap: NodeMap,
  adjacencyList: AdjacencyList,
): TreeNode {
  const { children, ...rest }: TreeNode = nodeMap.get(id);
  const node: TreeNode = { ...rest };
  node.children = adjacencyList
    .get(id)
    ?.map((childId) => constructTreeNode(childId, nodeMap, adjacencyList));
  return node;
}

export function convertToTreeData(
  data: any[],
  childrenIdentifier:
    | string
    | ((data: any[], item: any) => any[] | undefined) = "children",
): TreeNode[] {
  const trees: TreeNode[] = [];

  const adjacencyList = formAdjacencyList(data, childrenIdentifier);
  const nodeMap = nodesByIds(data);
  const rootNodeIds = findRootNodeIds(nodeMap, adjacencyList);
  rootNodeIds.forEach((rootId) => {
    trees.push(constructTreeNode(rootId, nodeMap, adjacencyList));
  });
  return trees;
}
