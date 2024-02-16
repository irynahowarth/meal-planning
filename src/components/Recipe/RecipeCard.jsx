import React from "react";
import Modal from "../Modal/Modal";
import ModalAlt from "../Modal/ModalAlt";
import * as Dialog from "@radix-ui/react-dialog";
import { Pencil1Icon, Cross1Icon } from "@radix-ui/react-icons";
import { ModalDataContext } from "../Modal/ModalDataProvider";

export default function RecipeCard({ recipe }) {
  const { toggleIsOpen, setModalView, setModalData } =
    React.useContext(ModalDataContext);

  function openModalAddRecord() {
    setModalView("addRecord");
    setModalData({
      id: recipe.id,
      name: recipe.name,
      addInfo: recipe.addInfo,
      date: new Date(Date.now()).toISOString().slice(0, 10),
    });
    toggleIsOpen();
  }

  return (
    <li className="border-b p-2 flex items-center">
      <div>
        <div>{recipe.name}</div>
        <span>{recipe.addInfo}</span>
      </div>
      <button
        className="ml-auto px-2 py-0.5  rounded-full border h-full"
        onClick={openModalAddRecord}
      >
        +
      </button>
      <div>
        <Dialog.Root>
          <Dialog.Trigger>
            <Pencil1Icon />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50">
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-md p-8 shadow w-full max-w-md">
                <div className="flex justify-between items-center">
                  <Dialog.Title className="text-xl">Add record</Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-gray-500">
                    <Cross1Icon />
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </li>
  );
}
