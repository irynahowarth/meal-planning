import React from "react";
import ViewRecordForm from "./ViewRecordForm";
import EditRecordForm from "./EditRecordForm";
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
      {modalState === "edit" && (
        <EditRecordForm
          recipe={recipe}
          afterSave={afterSave}
          handlerCancel={() => setModalState("edit")}
        />
      )}
    </>
  );
}
