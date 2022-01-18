import React, { useState, useEffect } from 'react';
import '../css/App.css';
import RecipeList from './RecipeList';
import Ingredient from './Ingredient';
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [searchTerm, setSearchTerm] = useState();
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(()=> {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    handleRecipeSearch
  }

  function handleRecipeSearch(searchInput) {
      setSearchTerm(prevSearchTerm => searchInput)
      setRecipes(recipes.filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1tbs'}
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      selectedRecipeId(undefined)
  }
    setRecipes(recipes.filter(recipe  => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList 
          recipes={recipes}
          searchTerm={searchTerm}
        />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  );

}


const sampleRecipes = [
  {
      id: 1,
      name: "Plain chicken",
      servings: 3,
      cookTime: "1:45",
      instructions: "1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken",
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          amount: '2 pounds'
        },
        {
          id: 2,
          name: 'Salt',
          amount: '1 tbs'
        }
      ]
  },
  {
      id: 2,
      name: "Plain pork",
      servings: 2,
      cookTime: "0:45",
      instructions: "1. Put paprika on pork \n2. Put pork in oven \n3. Eat pork",
      ingredients: [
        {
          id: 1,
          name: 'Pork',
          amount: '3 pounds'
        },
        {
          id: 2,
          name: 'Paprika',
          amount: '2 tbs'
        }
      ]
  }
]

export default App;
