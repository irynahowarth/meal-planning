import React from "react";
import ViewRecipeForm from "./ViewRecipeForm";
import DeleteRecipeForm from "./DeleteRecipeForm";

export default function ModalRecipe({ recipe, afterSave }) {
  const [modalState, setModalState] = React.useState("view");
  return (
    <>
      {modalState === "view" && (
        <ViewRecipeForm
          recipe={recipe}
          afterSave={afterSave}
          setModalState={setModalState}
        />
      )}
      {modalState === "delete" && (
        <DeleteRecipeForm
          recipe={recipe}
          afterDelete={afterSave}
          handlerCancel={() => setModalState("view")}
        />
      )}
    </>
  );
}
