import React from "react";
import { createPortal } from "react-dom";
import * as Dialog from "@radix-ui/react-dialog";
import AddRecordModal from "./Record/AddRecordModal";

export default function Modal({ isOpen }) {
  console.log(isOpen);
  return createPortal(
    <Dialog.Root open={isOpen} className="fixed place-content-center">
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-70 fixed inset-0 z-[15]" />
        <Dialog.Content
          className="data-[state=open]:animate-overlayShow fixed top-[50%] left-[50%] max-w-[450px] max-h-[85vh] w-[90vw]
     translate-x-[-50%] translate-y-[-50%] rounded-[6px] z-[30] bg-white  p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
      focus:outline-none"
        >
          <AddRecordModal />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>,
    document.querySelector("#modal-root")
  );
}
