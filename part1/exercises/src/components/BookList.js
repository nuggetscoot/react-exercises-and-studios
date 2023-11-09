export default function BookList() {
   let pageTitle = "I can't read";
   let book1 = "https://m.media-amazon.com/images/I/61KI2AEjYIL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61OMltAHfYL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://cdn.kobo.com/book-images/b813d0c8-c923-4cb8-a690-899aa6eca420/1200/1200/False/lally-s-game-an-afk-book-five-nights-at-freddy-s-tales-from-the-pizzaplex-1.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="FNAF at Freddy's" width={134}/>
         <img src={book2} alt="Freddy Five Bear" width={155}/>
         <img src={book3} alt="Pizza Five Bear Fred" width={133}/>
      </div>      
   );
}