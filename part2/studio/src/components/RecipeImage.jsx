function RecipeImage() {
  const recipeImage = props.image;

   return (
    <>
          <img src={recipeImage} alt="Recipe Image" className="recipeImage" />
</>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 