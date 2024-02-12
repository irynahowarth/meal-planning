import React from "react";
import mockData from "../../../mockData";
import * as Dialog from "@radix-ui/react-dialog";
import ButtonPrimary from "../../Layout/Button/ButtonPrimary";
import ButtonSecondary from "../../Layout/Button/ButtonSecondary";

const LABELS = mockData.labels;

export default function AddRecordModal() {
  const [title, setTitle] = React.useState("");
  const [addInfo, setAddInfo] = React.useState("");
  const [label, setLabel] = React.useState("");

  const id = React.useId();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Record saved!");
  }
  return (
    <>
      <Dialog.Title className="text-black text-800 pb-4">
        Add New Record
      </Dialog.Title>
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
          <Dialog.Close asChild>
            <ButtonPrimary buttonLabel="Save" />
          </Dialog.Close>
          <Dialog.Close asChild>
            <ButtonSecondary buttonLabel="Cancel" aria-label="Close" />
          </Dialog.Close>
        </div>
      </form>
    </>
  );
}
