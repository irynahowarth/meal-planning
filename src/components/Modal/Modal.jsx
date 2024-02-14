import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import AddRecordModal from "./Record/AddRecordModal";
import ViewRecordModal from "./Record/ViewRecordModal";

export default function Modal({ isOpen, handleDismiss, modalView, modalData }) {
  return (
    <Dialog.Root open={isOpen} className="fixed place-content-center">
      <Dialog.Trigger />
      <Dialog.Portal container={document.querySelector("#modal-root")}>
        <Dialog.Overlay className="bg-black opacity-25 fixed inset-0 z-[15]" />
        <Dialog.Content
          className="data-[state=open]:animate-overlayShow fixed top-[50%] left-[50%] max-w-[450px] max-h-[85vh] w-[90vw] rounded-md overflow-hidden
     translate-x-[-50%] translate-y-[-50%] z-[30] bg-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
      focus:outline-none"
        >
          {modalView === "addRecord" && (
            <AddRecordModal
              handleDismiss={handleDismiss}
              modalData={modalData}
            />
          )}
          {modalView === "viewRecord" && (
            <ViewRecordModal
              handleDismiss={handleDismiss}
              modalData={modalData}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
