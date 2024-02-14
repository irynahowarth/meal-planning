import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ButtonPrimary from "../../Layout/Buttons/ButtonPrimary";
import ButtonSecondary from "../../Layout/Buttons/ButtonSecondary";
import FormInput from "../../Layout/FormInput";
import FormSelect from "../../Layout/FormSelect";
import DatePicker from "../../Layout/DatePicker";
import { BoardDataContext } from "../../Board/BoardDataProvider";
import "../../../server";
import { produce } from "immer";

export default function AddRecordModal({ handleDismiss, modalData }) {
  const [title, setTitle] = React.useState(modalData?.name || "");
  const [addInfo, setAddInfo] = React.useState(modalData?.addInfo || "");
  const [date, setDate] = React.useState(modalData?.date || "");
  const [mealLabel, setMealLabel] = React.useState("");
  const [labelList, setLabelList] = React.useState([]);

  const { records, setRecords } = React.useContext(BoardDataContext);

  React.useEffect(() => {
    fetch("/api/labels")
      .then((res) => res.json())
      .then((data) => setLabelList(data.labels));
  }, []);

  const id = React.useId();

  function dateFormat(d) {
    return new Date(d).toISOString().substr(0, 10);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const meal = {
      id: Math.floor(Math.random() * 1000),
      name: title,
      addInfo: addInfo,
      label: mealLabel,
    };
    //

    const nextRecordsState = produce(records, (draftState) => {
      const findDate = draftState.find(
        (record) => dateFormat(Date.parse(record.date)) === dateFormat(date)
      );
      if (findDate) {
        findDate.meals.push(meal);
      } else {
        draftState.push({
          id: crypto.randomUUID(),
          date: date,
          meals: [meal],
        });
      }
      return draftState;
    });
    setRecords(nextRecordsState);

    handleDismiss();
  }

  return (
    <>
      <Dialog.Title className=" bg-gray-50 font-semibold text-md text-800 p-4 border-b">
        Add New Record
      </Dialog.Title>
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <DatePicker
            inputId={`date-${id}`}
            inputTitle="Date"
            inputValue={dateFormat(date)}
            inputChange={(event) => setDate(event.target.value)}
          />
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
            selectItems={labelList}
            selectNoSelect={{ title: "No label", value: "" }}
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <Dialog.Close asChild>
            <ButtonPrimary buttonLabel="Save" />
          </Dialog.Close>
          <Dialog.Close asChild>
            <ButtonSecondary
              buttonLabel="Cancel"
              buttonAction={handleDismiss}
              aria-label="Close"
            />
          </Dialog.Close>
        </div>
      </form>
    </>
  );
}
