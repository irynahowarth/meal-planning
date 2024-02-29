import React from "react";
import { produce } from "immer";
import ModalAlt from "../ModalAlt";
import { BoardDataContext } from "../../Board/BoardDataProvider";

export default function DeleteRecordForm({
  recipe,
  handlerCancel,
  afterDelete,
}) {
  const { records, setRecords, deleteRecord } =
    React.useContext(BoardDataContext);

  function handlerDelete() {
    deleteRecord(recipe);
    afterDelete();
  }

  function dateFormat(d) {
    return new Date(d).toISOString().substr(0, 10);
  }

  return (
    <ModalAlt.Content title="Delete Record">
      <div className="mt-4">
        {`Are you sure you want to delete ${recipe.name} on ${recipe.date}? This cannot be reversed after.`}
      </div>
      <div className="text-left mt-4 space-x-4">
        <button
          className="inline-flex justify-center items-center px-4 py-2  text-sm font-medium text-gray-400 hover:text-gray-500 rounded"
          onClick={handlerCancel}
        >
          Cancel
        </button>
        <button
          className="inline-flex justify-center items-center px-4 py-2 bg-red-500 text-sm font-medium text-white rounded hover:bg-red-600"
          onClick={handlerDelete}
        >
          Delete
        </button>
      </div>
    </ModalAlt.Content>
  );
}
