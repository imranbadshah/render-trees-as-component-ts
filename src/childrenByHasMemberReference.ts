export function childrenByHasMemberReference(
  data: any[],
  item: any,
): any[] | undefined {
  const childrenReferences = item["hasMember"];
  if (childrenReferences == undefined) {
    // console.log(`Item has no hasMember ${item.id}`);
    return undefined;
  }
  if (!Array.isArray(childrenReferences)) {
    console.warn(`item.hasMember is not an array: ${JSON.stringify(item)}`);
    return undefined;
  }
  const children: any = [];
  for (const childRef of childrenReferences) {
    try {
      const id = childRef["reference"].split("/")[1];
      const child = data.find((item) => item.id === id);
      if (child == undefined) {
        console.log(
          `Unreferenced child ${JSON.stringify(childRef)} with id: ${id}`,
        );
        continue;
      }
      children.push(child);
    } catch (e) {
      console.warn(`${e} \n Unrecognized reference encountered: ${childRef}.`);
      continue;
    }
  }
  return children;
}
