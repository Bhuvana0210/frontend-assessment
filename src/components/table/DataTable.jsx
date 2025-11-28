import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function DataTable({
  rows,
  sort,
  setSort,
  selectedIds,
  setSelectedIds,
  onEdit,
  onRowClick
}) {
  const toggleSort = (col) => {
    if (sort.column === col) {
      setSort({
        column: col,
        direction: sort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSort({ column: col, direction: "asc" });
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === rows.length) setSelectedIds([]);
    else setSelectedIds(rows.map(r => r.id));
  };

  return (
    <div className="bg-white shadow rounded">
      
      <TableHeader sort={sort} onSort={toggleSort} onSelectAll={toggleSelectAll} />

      <div className="max-h-[70vh] overflow-auto">
        {rows.map(row => (
          <TableRow
            key={row.id}
            item={row}
            isSelected={selectedIds.includes(row.id)}
            toggleSelect={() => {
              if (selectedIds.includes(row.id))
                setSelectedIds(selectedIds.filter(id => id !== row.id));
              else setSelectedIds([...selectedIds, row.id]);
            }}
            onEdit={onEdit}
            onRowClick={onRowClick}
          />
        ))}
      </div>
    </div>
  );
}
