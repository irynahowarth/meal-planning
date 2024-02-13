import React from "react";

export default function BoardNavBtn({
  label,
  dataSet,
  changeViewToday,
  children,
}) {
  function changeDayHandle(e) {
    const btnDataset = e.target.parentNode.dataset.btn || e.target.dataset.btn;
    let numDays = 0;
    console.log(btnDataset);
    switch (btnDataset) {
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
      {children ? children : label}
    </button>
  );
}
