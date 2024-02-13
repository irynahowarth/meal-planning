import React, { useEffect } from "react";
import useSWR from "swr";

export const BoardDataContext = React.createContext();

const fetcher = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data.dateRecords);

export default function BoardDataProvider({ children }) {
  const [records, setRecords] = React.useState(null);
  const {
    data: apiRecords,
    error,
    isLoading,
  } = useSWR(`api/dateRecords`, fetcher);

  React.useEffect(() => {
    if (typeof apiRecords === "undefined") return;
    setRecords(apiRecords);
  }, [apiRecords]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <BoardDataContext.Provider value={{ records, setRecords }}>
      {children}
    </BoardDataContext.Provider>
  );
}
