import React from "react";
import Modal from "../Modal/Modal";
import ModalAlt from "../Modal/ModalAlt";
import * as Dialog from "@radix-ui/react-dialog";
import { Pencil1Icon, Cross1Icon } from "@radix-ui/react-icons";
import { ModalDataContext } from "../Modal/ModalDataProvider";
import { BoardDataContext } from "../Board/BoardDataProvider";

export default function RecipeCard({ recipe }) {
  const { toggleIsOpen, setModalView, setModalData, modalData } =
    React.useContext(ModalDataContext);

  const [open, setOpen] = React.useState(false);

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
        <Dialog.Root open={open} onOpenChange={setOpen}>
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
                <RecipeForm recipe={recipe} afterSave={() => setOpen(false)} />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </li>
  );
}

function RecipeForm({ recipe, afterSave }) {
  const { addRecords, labels } = React.useContext(BoardDataContext);
  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await addRecords(data);
    afterSave();
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <div className="mt-8 ">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="data"
                className="text-sm font-medium text-gray-900"
              >
                Date
              </label>
              <input
                autoFocus
                className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
                type="date"
                defaultValue={new Date(Date.now()).toISOString().slice(0, 10)}
                name="date"
                id="data"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                autoFocus
                className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
                type="text"
                defaultValue={recipe.name}
                name="name"
                id="name"
              />
            </div>
            <div>
              <label
                htmlFor="addInfo"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Additional Info
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
                type="text"
                defaultValue={recipe.addInfo}
                name="addInfo"
                id="addInfo"
              />
            </div>
            <div>
              <label
                htmlFor="label"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Label
              </label>
              <select
                name="label"
                id="label"
                className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
              >
                <option key={0} value="">
                  No label
                </option>
                {labels.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="text-right mt-8 space-x-6">
          <Dialog.Close className="px-4 py-2  text-sm font-medium text-gray-500 rounded hover:text-gray-600">
            Cancel
          </Dialog.Close>
          <button className="inline-flex justify-center items-center px-4 py-2 bg-blue-500 text-sm font-medium text-white rounded hover:bg-blue-600 ">
            <span>Save</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
}
