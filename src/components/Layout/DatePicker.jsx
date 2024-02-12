import React from "react";

export default function DatePicker({
  inputId,
  inputTitle,
  inputValue,
  inputChange,
}) {
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {inputTitle}
      </label>
      <input
        className=""
        type="date"
        id={inputId}
        value={inputValue}
        onChange={inputChange}
      />
    </div>
  );
}
