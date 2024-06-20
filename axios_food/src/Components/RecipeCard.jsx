import { Link } from "react-router-dom"

function RecipeCard({recipe}) {
  
    return(
        <div>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <button><Link to={`/recipe/${recipe.idMeal}`}>View Details</Link></button>
        </div>
    )
}

export default RecipeCard