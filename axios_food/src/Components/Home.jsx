import axios from "axios"
import { useState, useEffect } from 'react'
import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"

function Home () {
    const [recipes, setRecipes] = useState([])
    // const [query, setQuery] = useState([])

    const getRecipes = async (query) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        setRecipes(response.data.meals)
        console.log(response.data.meals)
    }

    useEffect(() => {
        getRecipes('')
    }, []) 

    // const handleSearch = (newQuery) => {
    //     setQuery(newQuery)
    // }

    return (
        <div>
            <h1>The Meal DB</h1>
          <SearchBar onSearch={getRecipes} />
          <div>
            {recipes && recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </div>
      )
}

export default Home