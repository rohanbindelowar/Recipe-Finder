import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (e) {
      setLoading(false);
      setSearchParam("");
      setError(e);
    }
  }

  function handleAddToFavorite(getCurrentItem){
    let copyFavoriteList = [...favoriteList]
    const index = copyFavoriteList.findIndex(item=> item.id == getCurrentItem.id)
    
    if(index==-1){
      copyFavoriteList.push(getCurrentItem);
    }
    else{
      copyFavoriteList.splice(index)
    }
    console.log(favoriteList,"fafa")
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favoriteList,
        setFavoriteList,
        handleAddToFavorite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
