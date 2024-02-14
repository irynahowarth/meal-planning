import React from "react";

export default function ViewRecordModal({ modalData }) {
  return (
    <>
      <div className=" bg-gray-50 font-semibold text-md text-800 p-4 border-b">
        View Meal Record (id:{modalData.id})
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
