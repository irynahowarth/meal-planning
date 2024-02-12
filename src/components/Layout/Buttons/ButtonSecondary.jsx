import React from "react";

export default function ButtonSecondary({
  buttonLabel,
  buttonAction,
  ...other
}) {
  return (
    <button
      {...other}
      type="button"
      onClick={buttonAction}
      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto
       "
    >
      {buttonLabel}
    </button>
  );
}
