import React from "react";
import { ModalDataContext } from "../Modal/ModalDataProvider";
import ModalAlt from "../Modal/ModalAlt";
import ModalRecord from "../Modal/Record/ModalRecordContent";

export default function BoardRecord({ meal, viewDay }) {
  const { setIsOpen, setModalData, setModalView } =
    React.useContext(ModalDataContext);

  const [open, setOpen] = React.useState(false);

  function openModalViewRecord() {
    setModalView("viewRecord");
    setModalData({
      id: meal.id,
      name: meal.name,
      addInfo: meal.addInfo,
      label: meal?.label,
      date: new Date(viewDay).toISOString().slice(0, 10),
    });
    setIsOpen(true);
  }
  return (
    <>
      <ModalAlt open={open} onOpenChange={setOpen}>
        <ModalAlt.Button className="rounded p-2 hover:bg-gray-200">
          <div className="text-left border-b p-2 flex flex-col cursor-pointer">
            <div>{meal.name}</div>
            {meal.addInfo && <span>{meal.addInfo}</span>}
            {meal.label && (
              <span className="text-sm text-blue-700">{meal.label}</span>
            )}
          </div>
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
