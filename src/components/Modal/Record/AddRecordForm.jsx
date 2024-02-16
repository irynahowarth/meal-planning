import React from "react";
import { BoardDataContext } from "../../Board/BoardDataProvider";
import Spinner from "../../Layout/Spinner";
import ModalAlt from "../ModalAlt";

export default function AddRecordForm({ recipe, afterSave }) {
  const { addRecords, labels } = React.useContext(BoardDataContext);
  const [saving, setSaving] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await addRecords({ ...data, id: Math.floor(Math.random() * 10000) });
    afterSave();
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset disabled={saving} className="group">
        <div className="mt-8 group-disabled:opacity-50">
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
          <ModalAlt.Close className="px-4 py-2  text-sm font-medium text-gray-500 rounded hover:text-gray-600">
            Cancel
          </ModalAlt.Close>
          <button className="inline-flex justify-center items-center px-4 py-2 bg-blue-500 text-sm font-medium text-white rounded hover:bg-blue-600 group-disabled:pointer-events-none">
            <Spinner className="h-4 absolute group-enabled:opacity-0" />
            <span className="group-disabled:opacity-0">Save</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
}
