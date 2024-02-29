import React from "react";
import { RecipeDataContext } from "../../Recipe/RecipeDataProvider";
import Spinner from "../../Layout/Spinner";
import ModalAlt from "../ModalAlt";

export default function AddRecipeForm({ afterSave }) {
  const { addRecipe, groupList } = React.useContext(RecipeDataContext);
  const [saving, setSaving] = React.useState(false);
  const [selectedGroups, setSelectedGroups] = React.useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const recipeId = Math.floor(Math.random() * 10000);
    let errorObj = {};

    //Name validation
    const newName = data.name.replace(/\s/g, "");
    if (data.name === "") {
      errorObj.name = "Name is required";
    } else if (newName.length < 5) {
      errorObj.name = "Name should be at least 5 characters";
    }
    if (!errorObj.name) {
      await addRecipe(data, recipeId);
    } else {
      window.alert(errorObj.name);
    }
    afterSave();
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset disabled={saving} className="group">
        <div className="mt-8 group-disabled:opacity-50">
          <div className="space-y-6">
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
                defaultValue=""
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
                defaultValue=""
                name="addInfo"
                id="addInfo"
              />
            </div>
            <div>
              <label
                htmlFor="group"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Group
              </label>
              {groupList.map((option) => (
                <div key={option.id}>
                  <input
                    name="group"
                    type="checkbox"
                    id={`group-${option.id}`}
                    value={selectedGroups}
                    checked={selectedGroups.includes(option.id)}
                    onChange={(event) => {
                      setSelectedGroups((prev) => {
                        return event.target.checked
                          ? [...prev, option.id]
                          : prev.filter((el) => el != option.id);
                      });
                    }}
                  />

                  <label htmlFor={`group-${option.id}`}>{option.title}</label>
                </div>
              ))}
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
