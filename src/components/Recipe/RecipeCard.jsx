import React from "react";
import ModalAlt from "../Modal/ModalAlt";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import AddRecordForm from "../Modal/Record/AddRecordForm";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function RecipeCard({ recipe }) {
  const [open, setOpen] = React.useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: Math.floor(Math.random() * 10000),
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <li className="border-b p-2 flex items-center justify-between">
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
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
