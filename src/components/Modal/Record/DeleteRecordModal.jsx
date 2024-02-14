import React from "react";
import { ModalDataContext } from "../ModalDataProvider";
import { BoardDataContext } from "../../Board/BoardDataProvider";
import { produce } from "immer";

export default function DeleteRecordModal() {
  const [value, setValue] = React.useState(null);
  const { modalData, setModalData, toggleIsOpen, setModalView } =
    React.useContext(ModalDataContext);
  const { records, setRecords } = React.useContext(BoardDataContext);

  React.useEffect(() => {
    if (value !== "delete") return;
    deleteRecord();
    setModalView("viewRecipe");
    setModalData(null);
    toggleIsOpen();
  }, [value]);

  function dateFormat(d) {
    return new Date(d).toISOString().substr(0, 10);
  }

  function deleteRecord() {
    const nextRecordsState = produce(records, (draftState) => {
      const findDate = draftState.find(
        (record) =>
          dateFormat(Date.parse(record.date)) === dateFormat(modalData.date)
      );
      if (findDate) {
        findDate.meals = findDate.meals.filter(
          (meal) => meal.id !== modalData.id
        );
      }
      return draftState;
    });
    setRecords(nextRecordsState);
  }

  return (
    <>
      <h3 className=" bg-gray-50 font-semibold text-red-500 text-md text-800 p-4 border-b">
        Delete this Meal Record?
      </h3>
      <div className="p-6">
        {`Are you sure you want to delete ${modalData.name} on ${modalData.date}? This cannot be reversed after.`}
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={() => setValue("delete")}
        >
          Delete
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setModalView("viewRecord")}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
