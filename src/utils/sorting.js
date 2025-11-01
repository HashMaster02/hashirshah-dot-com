export function sortDateAscending(itemA, itemB) {
  return (
    new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
  );
}
