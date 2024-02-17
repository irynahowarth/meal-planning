import React from "react";
import ViewRecordForm from "./ViewRecordForm";
import DeleteRecordForm from "./DeleteRecordForm";

export default function ModalRecordContent({ recipe, afterSave }) {
  const [modalState, setModalState] = React.useState("view");

  return (
    <>
      {modalState === "view" && (
        <ViewRecordForm
          recipe={recipe}
          afterSave={afterSave}
          setModalState={setModalState}
        />
      )}
      {modalState === "delete" && (
        <DeleteRecordForm
          recipe={recipe}
          afterDelete={afterSave}
          handlerCancel={() => setModalState("view")}
          setModalState={setModalState}
        />
      )}
      {modalState === "edit" && <h1>This is edit state</h1>}
    </>
  );
}
