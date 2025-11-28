export function applySort(data, sort) {
  if (!sort.column) return data;

  return [...data].sort((a, b) => {
    const x = a[sort.column];
    const y = b[sort.column];

    if (x < y) return sort.direction === "asc" ? -1 : 1;
    if (x > y) return sort.direction === "asc" ? 1 : -1;
    return 0;
  });
}
