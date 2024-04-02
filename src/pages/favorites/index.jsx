import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
import './styles.css';
export const Favorites = () => {
  const { favoriteList} = useContext(GlobalContext);
  


  return (
    <div className="recipe-container">
      {favoriteList && favoriteList.length > 0
        ? favoriteList.map((item) => <RecipeItem items={item} />)
        : <h2 style={{display:"flex", justifyContent:"center"}}>Add Recipe from Home Page..</h2>}
    </div>
  );
};
export default Favorites;
