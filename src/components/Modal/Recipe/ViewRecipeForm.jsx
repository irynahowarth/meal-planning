import React from "react";
import ModalAlt from "../ModalAlt";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export default function ViewRecipeForm({ recipe, groups, setModalState }) {
  function editBtnHandler() {
    setModalState("edit");
  }
  function deleteBtnHandler() {
    setModalState("delete");
  }
  return (
    <>
      <div className="mt-8">
        <div className="mt-2.5">
          <div className="text-sm font-medium text-gray-900">Name</div>
          <div>{recipe.name}</div>
        </div>
        <div className="mt-2.5">
          <div className="text-sm font-medium text-gray-900">
            Additional Info
          </div>
          <div>{recipe.addInfo}</div>
        </div>
        <div className="mt-2.5">
          <div className="text-sm font-medium text-gray-900">Groups</div>
          <div>
            {groups.map((group) => (
              <div key={group.id}>{group.title}</div>
            ))}
          </div>
        </div>
        <div className="text-left mt-8 space-x-4">
          <button
            className="inline-flex justify-center items-center px-4 py-2 bg-blue-500 text-sm font-medium text-white rounded hover:bg-blue-600"
            onClick={editBtnHandler}
          >
            <Pencil1Icon />
          </button>
          <button
            className="inline-flex justify-center items-center px-4 py-2 bg-red-500 text-sm font-medium text-white rounded hover:bg-red-600"
            onClick={deleteBtnHandler}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </>
  );
}
