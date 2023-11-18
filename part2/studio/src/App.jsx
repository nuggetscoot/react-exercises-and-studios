
import React from 'react';
import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientsList from "./components/Ingredients.jsx"; 
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import recipeData from "./components/recipe.json"


export default function App() {
  const {
    name,
    recipeImage,
    ingredients,
    author,
    authorImage,
    authorWebsite,
  } = recipeData[0];

  return (
    <>
      <RecipeName name={name} />
      <RecipeImage image={recipeImage} alt={name} />
      <RateARecipe />
      <Button />
      <AuthorInfo
        authorName={author}
        authorImage={authorImage}
        authorWebsite={authorWebsite}
      />
      <IngredientsList ingredients={ingredients} />
    </>
  );
}
