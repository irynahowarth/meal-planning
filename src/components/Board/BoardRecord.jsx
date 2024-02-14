import React from "react";
import { ModalDataContext } from "../Modal/ModalDataProvider";
import Modal from "../Modal/Modal";

export default function BoardRecord({ meal, viewDay }) {
  const {
    isOpen,
    toggleIsOpen,
    modalData,
    setModalData,
    modalView,
    setModalView,
  } = React.useContext(ModalDataContext);

  function modalSkeleton() {
    if (modalView !== "viewRecord") return;
    if (!isOpen) return;
    if (modalData.id !== meal.id) return;
    return (
      <Modal
        isOpen={isOpen}
        handleDismiss={toggleIsOpen}
        modalData={modalData}
        modalView={modalView}
      />
    );
  }

  function openModalViewRecord() {
    setModalView("viewRecord");
    setModalData({
      id: meal.id,
      name: meal.name,
      addInfo: meal.addInfo,
      label: meal?.label,
      date: new Date(viewDay).toISOString().slice(0, 10),
    });
    toggleIsOpen();
  }
  return (
    <div
      className="border-b p-2 flex flex-col cursor-pointer"
      onClick={openModalViewRecord}
    >
      <div>{meal.name}</div>
      {meal.addInfo && <span>{meal.addInfo}</span>}
      {meal.label && (
        <span className="text-sm text-blue-700">{meal.label}</span>
      )}
      {modalSkeleton()}
    </div>
  );
}
