import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import "./styles.css";

export const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoriteList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();

      if (data?.data) setRecipeDetailsData(data?.data);
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container">
      <div className="box-info">
        <div>
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt=""
            className="recipe-image"
          />
        </div>
        <div className="info">
          <h2>{recipeDetailsData?.recipe?.title}</h2>
          <p>{recipeDetailsData?.recipe?.publisher}</p>
          <h4>
            Cooking Time: {recipeDetailsData?.recipe?.cooking_time}minutes{" "}
          </h4>
          <h4> Servings: {recipeDetailsData?.recipe?.servings}</h4>
          <button
            onClick={()=> handleAddToFavorite(recipeDetailsData?.recipe)}
            className="favorite-btn"
          >
            {
              favoriteList.findIndex(item=> item.id == recipeDetailsData?.recipe?.id) !== -1? 'Remove From Favorites'
              : "Save as Favorites"
            }
          </button>
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ol className="list">
            {recipeDetailsData?.recipe?.ingredients &&
              recipeDetailsData.recipe.ingredients.map((item, index) => (
                <li key={index}>
                  <span>{item.description}</span>
                  <span>
                    {" "}
                    - {item.quantity}
                    {item.unit}
                  </span>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Details;
