import InlineEditCell from "./InlineEditCell";

export default function TableRow({
  item,
  isSelected,
  toggleSelect,
  onEdit,
  onRowClick
}) {
  return (
    <div className="grid grid-cols-[50px,1fr,1fr,1fr,1fr,1fr] border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">

      {/* Checkbox Column */}
      <div className="py-2 px-3 flex items-center">
        <input type="checkbox" checked={isSelected} onChange={toggleSelect} />
      </div>

      {/* Name */}
      <div className="py-2 px-3 cursor-pointer" onClick={() => onRowClick(item)}>
        {item.name}
      </div>

      {/* Company */}
      <div className="py-2 px-3">{item.company}</div>

      {/* Stage (Inline Edit) */}
      <div className="py-2 px-3">
        <InlineEditCell
          value={item.stage}
          onSave={(val) => onEdit(item.id, { stage: val })}
        />
      </div>

      {/* Salary (Inline Edit) */}
      <div className="py-2 px-3">
        <InlineEditCell
          value={item.expectedSalary}
          onSave={(val) => onEdit(item.id, { expectedSalary: Number(val) })}
        />
      </div>

      {/* Applied Date */}
      <div className="py-2 px-3">{item.appliedDate}</div>
    </div>
  );
}
