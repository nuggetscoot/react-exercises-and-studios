import recipedata from "./recipe.json";

function RecipeName(props) {
  return (
    <h1>{props.name}</h1>
  );
};

export default RecipeName;

//import return the name of the recipe as a level 1 header