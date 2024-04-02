import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/Navbar/recipe-item";
import './styles.css';
export const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);
  
if(loading) return <div>Loading... Please wait..</div>

  return (
    <div className="recipe-container">
      {recipeList && recipeList.length > 0
        ? recipeList.map((item) => <RecipeItem item={item} />)
        : <h2 style={{display:"flex", justifyContent:"center"}}>No Recipe Found..</h2>}
    </div>
  );
};
export default Home;
