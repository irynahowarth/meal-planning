import React from "react";

const todayDate = new Date(Date.now());

export default function Board() {
  const [viewWeek, setViewWeek] = React.useState([]);
  const [viewToday, setViewToday] = React.useState(todayDate);

  React.useEffect(() => {
    setViewWeek(getCurrentWeek(viewToday));
  }, [viewToday]);

  function getCurrentWeek(today) {
    const currentWeek = [];

    for (let i = -3; i < 4; i++) {
      const dayOfWeek = new Date(today);
      const newDate = addDays(dayOfWeek, i);
      currentWeek.push(newDate);
    }
    return currentWeek;
  }

  function addDays(date, days) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
  }

  function changeDayHandle(e) {
    const numDays = e.target.dataset.btn === "prev" ? -1 : 1;
    setViewToday((prev) => {
      const oldDate = new Date(prev);
      const newDate = addDays(oldDate, numDays);
      return newDate;
    });
  }

  return (
    <div className="board-main w-4/5 bg-white border rounded">
      <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
        <h2 className="text-sm font-bold p-2">February 2024</h2>
        <button
          className="border rounded p-1 px-3"
          onClick={() => setViewToday(todayDate)}
        >
          Today
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
      </div>
      <div>
        <div className="grid  grid-cols-7	 leading-6 gap-px text-center border-b text-xs  font-medium text-gray-500 bg-gray-200">
          {viewWeek.map((date, index) => {
            return (
              <div className="py-2 bg-white" key={date.valueOf() + index}>
                {`${date.toUTCString().slice(0, 11)}`}
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid  grid-cols-7	gap-px h-full bg-gray-200">
        <div className="py-2 bg-white"></div>
        <div className="py-2 bg-white"></div>
        <div className="py-2 bg-white"></div>
        <div className="py-2 bg-white"></div>
        <div className="py-2 bg-white"></div>
        <div className="py-2 bg-white"></div>
        <div className="py-2 bg-white"></div>
      </div>
    </div>
  );
}
