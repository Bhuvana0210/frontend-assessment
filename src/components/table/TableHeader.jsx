export default function TableHeader({ sort, onSort, onSelectAll }) {
  const headers = [
    { label: "", key: "select" },
    { label: "Name", key: "name" },
    { label: "Company", key: "company" },
    { label: "Stage", key: "stage" },
    { label: "Salary", key: "expectedSalary" },
    { label: "Applied", key: "appliedDate" },
  ];

  return (
    <div className="grid grid-cols-8 border-b dark:border-gray-700 dark:hover:bg-gray-800 cursor-pointer">
      <div className="pl-2">
        <input type="checkbox" onChange={onSelectAll} />
      </div>

      {headers.slice(1).map(h => (
        <div
          key={h.key}
          onClick={() => onSort(h.key)}
          className="cursor-pointer"
        >
          {h.label}
          {sort.column === h.key && (sort.direction === "asc" ? " ▲" : " ▼")}
        </div>
      ))}
    </div>
  );
}
