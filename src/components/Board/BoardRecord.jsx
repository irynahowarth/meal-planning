import React from "react";
import ModalAlt from "../Modal/ModalAlt";
import ModalRecord from "../Modal/Record/ModalRecordContent";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function BoardRecord({ meal, viewDay }) {
  const [open, setOpen] = React.useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: meal.id + viewDay.valueOf(),
    parent: viewDay,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <>
      <ModalAlt open={open} onOpenChange={setOpen}>
        <ModalAlt.Button
          className="rounded p-2 hover:bg-gray-200 cursor-pointer border-b text-left flex flex-col w-full"
          ref={setNodeRef}
          style={style}
          {...listeners}
          {...attributes}
        >
          <div>{meal.name}</div>
          {meal.addInfo && <span>{meal.addInfo}</span>}
          {meal.label && (
            <span className="text-sm text-blue-700">{meal.label}</span>
          )}
        </ModalAlt.Button>
        <ModalAlt.Content title="View Meal Record">
          <ModalRecord
            recipe={{
              ...meal,
              date: new Date(viewDay).toISOString().slice(0, 10),
            }}
            afterSave={() => setOpen(false)}
          />
        </ModalAlt.Content>
      </ModalAlt>
    </>
  );
}
