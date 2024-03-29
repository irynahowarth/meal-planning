import React from "react";
import BoardHeader from "./BoardHeader";
import BoardColumn from "./BoardColumn";
import { BoardDataContext } from "../Board/BoardDataProvider";
import {
  DndContext,
  closestCenter,
  useSensors,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";

const todayDate = new Date(Date.now());

export default function Board() {
  const [viewWeek, setViewWeek] = React.useState([]);
  const [viewToday, setViewToday] = React.useState(todayDate);

  const { moveRecord, records } = React.useContext(BoardDataContext);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  async function handleDragEnd(event) {
    const { active, over } = event;
    console.log(event);

    if (active.id === over?.id) return;
    const meal = {
      ...active.data.current.record,
      date: new Date(over.id).toISOString().slice(0, 10),
    };
    const theDate = active.data.current.oldDate;
    await moveRecord(meal, theDate);
  }

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

  function changeViewToday(numDays) {
    //if numDays=0 change date for today
    setViewToday((prev) => {
      const oldDate = new Date(prev);
      const newDate = numDays !== 0 ? addDays(oldDate, numDays) : todayDate;
      return newDate;
    });
  }

  function dateCompare(date1, date2) {
    const year = date1.getFullYear() === date2.getFullYear();
    const month = date1.getMonth() === date2.getMonth();
    const day = date1.getDate() === date2.getDate();
    return year && month && day;
  }

  return (
    <div className="board-main bg-white border rounded">
      <BoardHeader changeViewToday={changeViewToday} viewWeek={viewWeek} />
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
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
        sensors={sensors}
      >
        <div className="grid  grid-cols-7	gap-px h-full bg-gray-200">
          {viewWeek.map((viewDay) => {
            const dayRecords = records?.find((rec) => {
              return dateCompare(viewDay, new Date(rec.date));
            });
            const mealListId = dayRecords?.length
              ? dayRecords.meals.map((el) => el.id)
              : [];

            return (
              <BoardColumn
                key={viewDay.valueOf()}
                viewDay={viewDay}
                dayRecords={dayRecords}
                mealListId={mealListId}
              />
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}
