
function AuthorInfo() {
  const AuthorInfo = ({ authorName, authorImage, authorWebsite }) => {
    return (
      <div>
        <img src={authorImage} alt={authorName} className="authorImage" />
        <div key={authorName}>{authorName}</div>
        <a href={authorWebsite} target="_blank" rel="noopener noreferrer">
          {authorWebsite}
        </a>
      </div>
    );
 }
}
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 