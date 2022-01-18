import React, { useContext } from 'react'
import Recipe from './Recipe'
import { v4 as uuidv4 } from 'uuid'
import { RecipeContext } from './App'

export default function RecipeList( { recipes, searchTerm }) {
    const { handleRecipeAdd, handleRecipeSearch } = useContext(RecipeContext)

    function handleSearch(searchInput) {
        handleRecipeSearch(searchInput)
    }

    function displayRecipes(recipes) {
        return (
            recipes.map(recipe => { 
                if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) return <Recipe key={recipe.id} {...recipe} /> })
        )
    }
    return (
        <>
        <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder='search' onChange={e => handleSearch(e.target.value)}/>
        </div>  

        <div className="recipe-list">
            {
                displayRecipes(recipes)
            }
            <div className="recipe-list__add-recipe-btn-container">
                <button
                className="btn btn--primary"
                onClick={handleRecipeAdd}
                >
                    Add Recipe</button>
            </div>
        </div>
        </>
    )
}

