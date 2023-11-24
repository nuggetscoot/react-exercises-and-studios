import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNotes] = useState('');
   const [recipeStatus, setRecipeStatus] = useState(false);
   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);
   }

   return (
      <div style={{ paddingTop: '50px' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Have you tried this recipe? Add your notes here:{' '}
            <input type="text" value={notes} onChange={handleChange} />
          </label>
          <input type="submit" />
        </form>
  
        {/* Step 5: Update HTML to use the value of notes and display different messages */}
        <p>{notes ? `My Recipe Notes: ${notes}` : "My Recipe Notes aren't here!"}</p>
  
        <p>{recipeStatus ? 'I have tried this recipe!' : 'I have not tried this recipe!'}</p>
      </div>
    );
  }
