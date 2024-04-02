import "./styles.css";
import { Link } from "react-router-dom";
export default function RecipeItem({ items }) {
  console.log(items);
  return (
    <div className="recipe-box">
      <div>
        {" "}
        <img src={items.image_url} alt="image" className="recipe-img" />
      </div>

      <div className="details">
        <span>{items.publisher}</span>
        <h2>{items.title}</h2>
        <Link to={`/recipe-item/${items.id}`} className="recipe-btn">
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
