import React from "react";
import useSWR from "swr";

export const RecipeDataContext = React.createContext();

const fetcher = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

export default function RecipeDataProvider({ children }) {
  const [groupList, setGroupList] = React.useState([]);
  const [recepieList, setRecepieList] = React.useState([]);

  const { data: apiRecipes, error, isLoading } = useSWR(`api/recipes`, fetcher);
  const { data: apiGroups } = useSWR(`api/groups`, fetcher);

  React.useEffect(() => {
    if (typeof apiRecipes === "undefined") return;
    setRecepieList(apiRecipes.recipes);
  }, [apiRecipes]);

  React.useEffect(() => {
    if (typeof apiGroups === "undefined") return;
    setGroupList(apiGroups.groups);
  }, [apiGroups]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <RecipeDataContext.Provider value={{ groupList, recepieList }}>
      {children}
    </RecipeDataContext.Provider>
  );
}
