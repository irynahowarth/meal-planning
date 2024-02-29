import React from "react";
import ViewRecipeForm from "./ViewRecipeForm";
import DeleteRecipeForm from "./DeleteRecipeForm";
import EditRecipeForm from "./EditRecipeForm";

export default function ModalRecipe({ recipe, groups, afterSave }) {
  const [modalState, setModalState] = React.useState("view");
  return (
    <>
      {modalState === "view" && (
        <ViewRecipeForm
          recipe={recipe}
          groups={groups}
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
      {modalState === "edit" && (
        <EditRecipeForm
          recipe={recipe}
          afterSave={afterSave}
          groups={groups}
          handlerCancel={() => setModalState("edit")}
        />
      )}
    </>
  );
}
