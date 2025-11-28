import InlineEditCell from "./InlineEditCell";

export default function TableRow({ item, isSelected, toggleSelect, onEdit, onRowClick }) {
  return (
<div className="grid grid-cols-6 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-3">
      
      <div className="pl-2">
        <input type="checkbox" checked={isSelected} onChange={toggleSelect} />
      </div>

      <div onClick={() => onRowClick(item)}>{item.name}</div>

      <div>{item.company}</div>

      <InlineEditCell
        value={item.stage}
        onSave={(val) => onEdit(item.id, { stage: val })}
      />

      <InlineEditCell
        value={item.expectedSalary}
        onSave={(val) => onEdit(item.id, { expectedSalary: Number(val) })}
      />

      <div>{item.appliedDate}</div>
    </div>
  );
}
