import React from "react";

export default function ButtonPrimary({ buttonLabel, buttonAction }) {
  return (
    <button
      type="submit"
      onClick={buttonAction}
      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto
       "
    >
      {buttonLabel}
    </button>
  );
}
