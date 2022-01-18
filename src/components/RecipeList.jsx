import React, { useContext } from 'react'
import Recipe from './Recipe'
import { v4 as uuidv4 } from 'uuid'
import { RecipeContext } from './App'

export default function RecipeList( { recipes }) {
    const { handleRecipeAdd } = useContext(RecipeContext)
    return (
        <>
        <div className="recipe-list">
            {recipes.map(recipe => {
                return <Recipe 
                key={recipe.id}
                {...recipe} />
            })}
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

