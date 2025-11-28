export default function TableHeader({ sort, onSort, onSelectAll }) {
  const cellClass =
    "py-2 px-3 font-semibold text-gray-700 dark:text-gray-200";

  const sortable = (col, label) => (
    <div
      className="cursor-pointer flex items-center gap-1"
      onClick={() => onSort(col)}
    >
      {label}
      {sort.column === col && (
        <span>{sort.direction === "asc" ? "▲" : "▼"}</span>
      )}
    </div>
  );

  return (
<div className="grid grid-cols-6 border-b bg-gray-100 dark:bg-gray-800 sticky top-0 z-10">
      <div className="pl-2 py-2">
        <input type="checkbox" onChange={onSelectAll} />
      </div>
      <div className={cellClass}>{sortable("name", "Name")}</div>
      <div className={cellClass}>{sortable("company", "Company")}</div>
      <div className={cellClass}>{sortable("stage", "Stage")}</div>
      <div className={cellClass}>{sortable("expectedSalary", "Salary")}</div>
      <div className={cellClass}>{sortable("appliedDate", "Applied")}</div>
    </div>
  );
}
