import React from "react";

export default function BoardHeader({ viewToday, changeViewToday, viewWeek }) {
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

  const getWeekTitle = () => {
    if (viewWeek.length < 1) return;

    let title = "";
    const startMonth = viewWeek[0].toLocaleDateString("en-GB", {
      month: "short",
    });

    const endMonth =
      viewWeek[0].getMonth() === viewWeek[6].getMonth()
        ? ""
        : `${viewWeek[6].toLocaleDateString("en-GB", {
            month: "short",
          })} `;

    const endYear = viewWeek[6].getFullYear();
    const startYear =
      viewWeek[0].getFullYear() === endYear
        ? ""
        : `, ${viewWeek[0].getFullYear()}`;

    title = `${startMonth} ${viewWeek[0].getDate()}${startYear} - ${endMonth}${viewWeek[6].getDate()}, ${endYear}`;
    return title;
  };

  return (
    <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
      <h2 className="text-sm font-bold p-2">{getWeekTitle()}</h2>
      <button
        className="border rounded p-1 px-3"
        data-btn="today"
        onClick={changeDayHandle}
      >
        Today
      </button>
      <button
        className="border rounded p-1 px-3"
        data-btn="prevWeek"
        onClick={changeDayHandle}
      >
        Prev Week
      </button>
      <button
        className="border rounded p-1 px-3"
        data-btn="prev"
        onClick={changeDayHandle}
      >
        Prev
      </button>
      <button
        className="border rounded p-1 px-3"
        data-btn="next"
        onClick={changeDayHandle}
      >
        Next
      </button>
      <button
        className="border rounded p-1 px-3"
        data-btn="nextWeek"
        onClick={changeDayHandle}
      >
        Next Week
      </button>
    </div>
  );
}
