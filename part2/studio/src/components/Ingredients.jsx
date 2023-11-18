import recipeData from './recipe.json';
function IngredientList() {
  const ingredients = recipeData.ingredients;

   return (
    <div>
    <h3>Ingredients</h3>
    <ul>
      {/* Map over the array of ingredients */}
      {ingredients.map((ingredient, id) => (
        <li key={id}>{ingredient}</li>
      ))}
    </ul>
  </div>
   );

 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 