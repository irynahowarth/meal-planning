import React from "react";
import { produce } from "immer";
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

function reducer(records, action) {
  return produce(records, (draftRecords) => {
    switch (action.type) {
      case "delete-record": {
        const findDate = draftRecords.find(
          (record) =>
            dateFormat(Date.parse(record.date)) ===
            dateFormat(action.record.date)
        );
        if (findDate) {
          findDate.meals = findDate.meals.filter(
            (meal) => meal.id !== action.record.id
          );
        }
        break;
      }
      //without moving to different date
      case "update-record": {
        const findDate = draftRecords.find(
          (record) =>
            dateFormat(Date.parse(record.date)) === dateFormat(action.theDate)
        );
        const findMealRecord = findDate.meals.find(
          (el) => el.id == parseInt(action.meal.id)
        );
        findMealRecord.name = action.meal.name;
        findMealRecord.addInfo = action.meal.addInfo;
        findMealRecord.label = action.meal.label;
        break;
      }

      //moving record to different date
      case "move-record": {
        //remove record from the board with old date
        const findDate = draftRecords.find(
          (record) =>
            dateFormat(Date.parse(record.date)) === dateFormat(action.theDate)
        );
        if (findDate) {
          findDate.meals = findDate.meals.filter(
            (el) => el.id !== action.meal.id
          );
        }
        //add updated record with new date to the board
        const findNewDate = draftRecords.find(
          (record) =>
            dateFormat(Date.parse(record.date)) === dateFormat(action.meal.date)
        );

        if (findNewDate) {
          findNewDate.meals.push({
            id: parseInt(action.meal.id),
            ...action.meal,
          });
        } else {
          draftRecords.push({
            id: Math.floor(Math.random() * 10000),
            date: action.meal.date,
            meals: [{ id: action.meal.id, ...action.meal }],
          });
        }
        break;
      }

      case "add-record": {
        const findDate = draftRecords.find(
          (record) =>
            dateFormat(Date.parse(record.date)) === dateFormat(action.meal.date)
        );
        if (findDate) {
          findDate.meals.push({ id: action.mealId, ...action.meal });
        } else {
          draftRecords.push({
            id: Math.floor(Math.random() * 10000),
            date: action.meal.date,
            meals: [{ id: action.mealId, ...action.meal }],
          });
        }
        break;
      }

      case "start-records": {
        action.apiRecords.map((rec) => draftRecords.push(rec));
        break;
      }
    }
  });
}

export default function BoardDataProvider({ children }) {
  const [records, dispatch] = React.useReducer(reducer, []);
  const [labels, setLabels] = React.useState(null);
  const {
    data: apiRecords,
    error,
    isLoading,
  } = useSWR(`api/dateRecords`, fetcher);
  const { data: apiLabels } = useSWR(`api/labels`, fetcherLabels);

  React.useEffect(() => {
    if (typeof apiRecords === "undefined") return;
    dispatch({
      type: "start-records",
      apiRecords,
    });
  }, [apiRecords]);

  React.useEffect(() => {
    if (typeof apiLabels === "undefined") return;
    setLabels(apiLabels);
  }, [apiLabels]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function deleteRecord(record) {
    dispatch({
      type: "delete-record",
      record,
    });
  }

  function addSingleRecord(meal, mealId) {
    dispatch({
      type: "add-record",
      meal,
      mealId,
    });
  }

  async function addRecords(meal, mealId) {
    addSingleRecord(meal, mealId);
    await sleep(1000);
  }

  async function editRecords({ meal, oldDate }) {
    const isDateNew = Date.parse(meal.date) === Date.parse(oldDate);
    const compareDate = isDateNew ? meal.date : oldDate;

    !isDateNew
      ? moveRecord({ ...meal, id: parseInt(meal.id) }, compareDate)
      : updateRecord(meal, oldDate);

    await sleep(1000);
  }

  //update record if the date is not changed
  function updateRecord(meal, theDate) {
    dispatch({
      type: "update-record",
      meal,
      theDate,
    });
  }
  //update record and move to new date
  function moveRecord(meal, theDate) {
    dispatch({
      type: "move-record",
      meal,
      theDate,
    });
  }

  return (
    <BoardDataContext.Provider
      value={{
        records,
        labels,
        setLabels,
        addRecords,
        editRecords,
        deleteRecord,
        moveRecord,
      }}
    >
      {children}
    </BoardDataContext.Provider>
  );
}

function dateFormat(d) {
  return new Date(d).toISOString().slice(0, 10);
}
