import React from "react";
import BoardRecord from "./BoardRecord";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function BoardColumn({ viewDay, dayRecords, mealListId }) {
  const [recordsId, setRecordsId] = React.useState(mealListId);
  const mealList =
    dayRecords !== undefined
      ? dayRecords?.meals.map((meal, index) => (
          <BoardRecord key={index} meal={meal} viewDay={viewDay} />
        ))
      : null;

  const { setNodeRef } = useDroppable({ id: viewDay.valueOf() });
  // const { transform, transition } = useSortable({ id: viewDay.valueOf() });

  return (
    <SortableContext
      id={viewDay.valueOf()}
      items={recordsId}
      strategy={verticalListSortingStrategy}
    >
      <div className="py-2 bg-white" ref={setNodeRef}>
        <div>{mealList}</div>
      </div>
    </SortableContext>
  );
}
