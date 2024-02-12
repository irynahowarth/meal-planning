import React from "react";

export default function FormInput({
  inputTitle,
  inputId,
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
        type="text"
        id={inputId}
        value={inputValue}
        onChange={inputChange}
      />
    </div>
  );
}
