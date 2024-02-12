import React from "react";
import mockData from "../../../mockData";
import * as Dialog from "@radix-ui/react-dialog";
import ButtonPrimary from "../../Layout/Buttons/ButtonPrimary";
import ButtonSecondary from "../../Layout/Buttons/ButtonSecondary";
import FormInput from "../../Layout/FormInput";
import FormSelect from "../../Layout/FormSelect";

const LABELS = mockData.labels;

export default function AddRecordModal() {
  const [title, setTitle] = React.useState("");
  const [addInfo, setAddInfo] = React.useState("");
  const [mealLabel, setMealLabel] = React.useState("");

  const id = React.useId();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ title }, { addInfo });
  }
  return (
    <>
      <Dialog.Title className=" bg-gray-50 font-semibold text-md text-800 p-4 border-b">
        Add New Record
      </Dialog.Title>
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <FormInput
            inputId={`title-${id}`}
            inputTitle="Title"
            inputValue={title}
            inputChange={(event) => setTitle(event.target.value)}
          />
          <FormInput
            inputId={`addInfo-${id}`}
            inputTitle="Add Info"
            inputValue={addInfo}
            inputChange={(event) => setAddInfo(event.target.value)}
          />
          <FormSelect
            selectValue={mealLabel.title}
            selectCahnge={(event) => {
              setMealLabel(event.target.value);
            }}
            selectItems={LABELS}
            selectNoSelect={{ title: "No label", value: "" }}
          />
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
