import React from "react";
import useSWR from "swr";

export const BoardDataContext = React.createContext();

const fetcher = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data.dateRecords);

export default function BoardDataProvider({ children }) {
  const {
    data: records,
    error,
    isLoading,
  } = useSWR(`api/dateRecords`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <BoardDataContext.Provider value={{ records }}>
      {children}
    </BoardDataContext.Provider>
  );
}
