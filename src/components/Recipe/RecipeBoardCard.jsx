import React from "react";
import ModalAlt from "../Modal/ModalAlt";
import ModalRecipe from "../Modal/Recipe/ModalRecipeContent";

export default function RecipeBoardCard({ recipe, groups }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <ModalAlt open={open} onOpenChange={setOpen}>
        <ModalAlt.Button className="rounded p-2  cursor-pointer border-b text-left flex flex-col">
          <div className="p-3 text-sm">
            <h2 className="font-bold">{recipe.name}</h2>
            <div>{recipe.addInfo}</div>
            <div>
              Groups:
              {groups.map((group) => {
                if (+group.id === 1) return;
                return group.title;
              })}
            </div>
          </div>
        </ModalAlt.Button>
        <ModalAlt.Content title="View Recipe">
          <ModalRecipe
            recipe={recipe}
            groups={groups}
            afterSave={() => setOpen(false)}
          />
        </ModalAlt.Content>
      </ModalAlt>
    </>
  );
}
