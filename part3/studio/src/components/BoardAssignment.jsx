import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      { label: 'Easy Recipes', value: 'easy_recipes' },
      { label: 'Desserts', value: 'desserts' },
      { label: 'Lemon Baked Goods', value: 'lemon_baked_goods' },
   ];
   const [boardName, setBoardName] = useState('no boards yet!');

   const handleChange = (event) => {
      setBoardName(event.target.value);

   }
   const options = boards.map((board) => (
      <option key={board.value} value={board.value}>
        {board.label}
      </option>
    ));
   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
