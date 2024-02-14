import React, { useEffect } from "react";
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

  return (
    <BoardDataContext.Provider
      value={{ records, setRecords, labels, setLabels }}
    >
      {children}
    </BoardDataContext.Provider>
  );
}
