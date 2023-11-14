import styles from './Description.module.css';
import React from 'react';
function RecipeAuthor () {
    let authorLink = "https://handletheheat.com/about-me/"
    let authorPhoto = "https://handletheheat.com/wp-content/uploads/2020/02/About-Tessa-Arias-of-Handle-the-Heat.jpg"
   let authorName = "Tessa Arias"
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Tessa Arias" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}
class RecipeDescription extends React.Component {
    render () {
        return (<div> 
            <div>
               <h1>Lemon Poppy Seed Muffins</h1>
               <p>Yummy delicious</p>
            </div>
            <RecipeAuthor />
         </div>)
    }
}
export default RecipeDescription;