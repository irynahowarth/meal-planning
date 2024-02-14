import React from "react";
import DropMenu from "../../Layout/DropMenu";
import { ModalDataContext } from "../ModalDataProvider/";

export default function ViewRecordModal() {
  const { modalData } = React.useContext(ModalDataContext);
  return (
    <>
      <div className="flex justify-between  bg-gray-50 font-semibold text-md text-800 p-4 border-b overflow-visible">
        <h3>View Meal Record (id:{modalData.id})</h3>
        <DropMenu />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <div>{modalData.name}</div>
        <div>{modalData.addInfo}</div>
        <div>{modalData.date}</div>
        <div>{modalData.label}</div>
      </div>
    </>
  );
}
