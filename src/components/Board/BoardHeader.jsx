import React from "react";
import BoardTitle from "./BoardTitle";
import BoardNavBtn from "./BoardNavBtn";
import NextIcon from "../icons/NextIcon";
import NextFastIcon from "../icons/NextFastIcon";
import PrevIcon from "../icons/PrevIcon";
import PrevFastIcon from "../icons/PrevFastIcon";

export default function BoardHeader({ changeViewToday, viewWeek }) {
  return (
    <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
      <BoardTitle viewWeek={viewWeek} />

      <BoardNavBtn
        label="Prev Week"
        changeViewToday={changeViewToday}
        dataSet="prevWeek"
      >
        <PrevFastIcon dataSet="prevWeek" />
      </BoardNavBtn>
      <BoardNavBtn
        label="Prev"
        changeViewToday={changeViewToday}
        dataSet="prev"
      >
        <PrevIcon dataSet="prev" />
      </BoardNavBtn>
      <BoardNavBtn
        label="Today"
        changeViewToday={changeViewToday}
        dataSet="today"
      />
      <BoardNavBtn
        label="Next"
        changeViewToday={changeViewToday}
        dataSet="next"
      >
        <NextIcon dataSet="next" />
      </BoardNavBtn>

      <BoardNavBtn
        label="Next Week"
        changeViewToday={changeViewToday}
        dataSet="nextWeek"
      >
        <NextFastIcon dataSet="nextWeek" />
      </BoardNavBtn>
    </div>
  );
}
