import React, { useEffect } from "react";
import { produce, current } from "immer";
import useSWR from "swr";

export const BoardDataContext = React.createContext();

const fetcher = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data.dateRecords);

const fetcherLabels = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data.labels);

export default function BoardDataProvider({ children }) {
  const [records, setRecords] = React.useState(null);
  const [labels, setLabels] = React.useState(null);
  const {
    data: apiRecords,
    error,
    isLoading,
  } = useSWR(`api/dateRecords`, fetcher);
  const { data: apiLabels } = useSWR(`api/labels`, fetcherLabels);

  React.useEffect(() => {
    if (typeof apiRecords === "undefined") return;
    setRecords(apiRecords);
  }, [apiRecords]);

  React.useEffect(() => {
    if (typeof apiLabels === "undefined") return;
    setLabels(apiLabels);
  }, [apiLabels]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function deleteRecord(recipe) {
    const nextRecordsState = produce(records, (draftState) => {
      const findDate = draftState.find(
        (record) =>
          dateFormat(Date.parse(record.date)) === dateFormat(recipe.date)
      );
      if (findDate) {
        findDate.meals = findDate.meals.filter((meal) => meal.id !== recipe.id);
      }
      return draftState;
    });
    setRecords(nextRecordsState);
  }

  function addSingleRecord(meal, mealId) {
    return produce(records, (draftState) => {
      const findDate = draftState.find(
        (record) =>
          dateFormat(Date.parse(record.date)) === dateFormat(meal.date)
      );

      if (findDate) {
        findDate.meals.push({ id: mealId, ...meal });
      } else {
        draftState.push({
          id: mealId,
          date: meal.date,
          meals: [meal],
        });
      }
      return draftState;
    });
  }

  async function addRecords(meal, mealId) {
    const nextRecordsState = addSingleRecord(meal, mealId);

    await sleep(1000);

    setRecords(nextRecordsState);
  }

  async function editRecords({ meal, oldDate }) {
    const compareDate =
      Date.parse(meal.date) === Date.parse(oldDate) ? meal.date : oldDate;

    //date didn't change
    // const nextRecordsState = updateRecord(meal, compareDate);
    console.log(meal);
    deleteRecord(meal);

    // const nextRecordsState = ;

    await sleep(1000);

    // setRecords(nextRecordsState);
  }

  //update record if the date is not changed
  function updateRecord(meal, theDate) {
    return produce(records, (draftState) => {
      console.log(current(draftState));
      const findDate = draftState.find(
        (record) => dateFormat(Date.parse(record.date)) === dateFormat(theDate)
      );

      const findMealRecord = findDate.meals.find(
        (el) => el.id == parseInt(meal.id)
      );
      findMealRecord.name = meal.name;
      findMealRecord.addInfo = meal.addInfo;
      findMealRecord.label = meal.label;

      return draftState;
    });
  }

  return (
    <BoardDataContext.Provider
      value={{
        records,
        setRecords,
        labels,
        setLabels,
        addRecords,
        editRecords,
        deleteRecord,
      }}
    >
      {children}
    </BoardDataContext.Provider>
  );
}

function dateFormat(d) {
  return new Date(d).toISOString().slice(0, 10);
}
