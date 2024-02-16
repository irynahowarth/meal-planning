import React, { useEffect } from "react";
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

  async function addRecords(meal) {
    const nextRecordsState = produce(records, (draftState) => {
      const findDate = draftState.find(
        (record) =>
          dateFormat(Date.parse(record.date)) === dateFormat(meal.date)
      );
      if (findDate) {
        findDate.meals.push(meal);
      } else {
        draftState.push({
          id: crypto.randomUUID(),
          date: meal.date,
          meals: [meal],
        });
      }
      return draftState;
    });

    await sleep(1000);

    setRecords(nextRecordsState);
  }

  return (
    <BoardDataContext.Provider
      value={{ records, setRecords, labels, setLabels, addRecords }}
    >
      {children}
    </BoardDataContext.Provider>
  );
}

function dateFormat(d) {
  return new Date(d).toISOString().substr(0, 10);
}
