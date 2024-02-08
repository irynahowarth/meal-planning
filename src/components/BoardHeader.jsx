import React from "react";
import BoardTitle from "./BoardTitle";
import BoardNavBtn from "./BoardNavBtn";

export default function BoardHeader({ changeViewToday, viewWeek }) {
  return (
    <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
      <BoardTitle viewWeek={viewWeek} />
      <BoardNavBtn
        label="Today"
        changeViewToday={changeViewToday}
        dataSet="today"
      />

      <BoardNavBtn
        label="Prev Week"
        changeViewToday={changeViewToday}
        dataSet="prevWeek"
      />
      <BoardNavBtn
        label="Prev"
        changeViewToday={changeViewToday}
        dataSet="prev"
      />
      <BoardNavBtn
        label="Next"
        changeViewToday={changeViewToday}
        dataSet="next"
      />
      <BoardNavBtn
        label="Next Week"
        changeViewToday={changeViewToday}
        dataSet="nextWeek"
      />
    </div>
  );
}
