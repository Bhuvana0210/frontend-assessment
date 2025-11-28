import React, { useState } from "react";

export default function InlineEditCell({ value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);

  const save = () => {
    setEditing(false);
    if (val !== value) onSave(val);
  };

  if (!editing) {
    return (
      <div onClick={() => setEditing(true)}>
        {String(value)}
      </div>
    );
  }

  return (
    <input
      autoFocus
      className="border px-1"
      value={val}
      onBlur={save}
      onChange={e => setVal(e.target.value)}
    />
  );
}
