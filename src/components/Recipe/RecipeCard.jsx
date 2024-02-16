import React from "react";
import ModalAlt from "../Modal/ModalAlt";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import AddRecordForm from "../Modal/Record/AddRecordForm";

export default function RecipeCard({ recipe }) {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="border-b p-2 flex items-center justify-between">
      <div>
        <div>{recipe.name}</div>
        <span>{recipe.addInfo}</span>
      </div>

      <ModalAlt open={open} onOpenChange={setOpen}>
        <ModalAlt.Button className="rounded p-2 hover:bg-gray-200">
          <PlusCircledIcon />
        </ModalAlt.Button>
        <ModalAlt.Content title="Add New Record">
          <AddRecordForm recipe={recipe} afterSave={() => setOpen(false)} />
        </ModalAlt.Content>
      </ModalAlt>
    </li>
  );
}
