import React from "react";

export default function BoardNavBtn({ label, dataSet, changeViewToday }) {
  function changeDayHandle(e) {
    let numDays = 0;
    switch (e.target.dataset.btn) {
      case "prev": {
        numDays = -1;
        break;
      }
      case "next": {
        numDays = 1;
        break;
      }
      case "prevWeek": {
        numDays = -7;
        break;
      }
      case "nextWeek": {
        numDays = 7;
        break;
      }
      case "today": {
        numDays = 0;
        break;
      }
    }

    changeViewToday(numDays);
  }
  return (
    <button
      className="border rounded p-1 px-3"
      data-btn={dataSet}
      onClick={changeDayHandle}
    >
      {label}
    </button>
  );
}
