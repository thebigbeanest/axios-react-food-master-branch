import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

function RecipeDetails() {

    const { id } = useParams()
    const [recipe, setRecipe] = useState([])

    const getRecipe = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setRecipe(response.data.meals[0])
    }

    useEffect(() => {
        getRecipe();
    }, [id])

    if(!recipe)
        return (
       <div>Loading...</div>
   )

    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
        </div>
    )
}

export default RecipeDetails