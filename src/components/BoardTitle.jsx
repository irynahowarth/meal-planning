import React from "react";

export default function BoardTitle({ viewWeek }) {
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
  return <h2 className="text-sm font-bold p-2">{getWeekTitle()}</h2>;
}
