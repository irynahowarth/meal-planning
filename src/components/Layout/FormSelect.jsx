import React from "react";

export default function FormSelect({
  selectValue,
  selectCahnge,
  selectItems,
  selectNoSelect,
}) {
  return (
    <select value={selectValue} onChange={selectCahnge}>
      {selectNoSelect && (
        <option key={0} value={selectNoSelect.value}>
          {selectNoSelect.title}
        </option>
      )}
      {selectItems?.map((item) => (
        <option key={item.id} value={item.title}>
          {item.title}
        </option>
      ))}
    </select>
  );
}
