import "./styles.css";
import { Link } from "react-router-dom";
export default function RecipeItem({ item }) {
  return (
    <div className="recipe-box">
      <div>
        {" "}
        <img src={item.image_url} alt="image" className="recipe-img" />
      </div>

      <div className="details">
        <span>{item.publisher}</span>
        <h2>{item.title}</h2>
        <Link to={`/recipe-item/${item.id}`} className="recipe-btn">
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
