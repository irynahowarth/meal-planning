import React from "react";
import mockData from "../mockData";

const LABELS = mockData.labels;

export default function FormAddRecord() {
  const [title, setTitle] = React.useState("");
  const [addInfo, setAddInfo] = React.useState("");
  const [label, setLabel] = React.useState("");

  const id = React.useId();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Record saved!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`title-${id}`}>Title</label>
        <input
          type="text"
          id={`title-${id}`}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`addInfo-${id}`}>Add Info</label>
        <input
          type="text"
          id={`addInfo-${id}`}
          value={addInfo}
          onChange={(event) => setAddInfo(event.target.value)}
        />
      </div>
      <div>
        <select
          value={label.title}
          onChange={(event) => {
            setLabel(event.target.value);
          }}
        >
          <option key={0} value={""}>
            No label
          </option>
          {LABELS.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
        >
          Save
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
