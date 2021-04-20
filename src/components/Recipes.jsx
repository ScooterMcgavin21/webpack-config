import { useState } from 'react';

const cookieRecipie = {
    CookieDough: 2,
    heat: 1,
    chocolateChips: 4,
  };
  
  const cookieBaseRecipie = {
    ...cookieRecipie,
    dough: 1,
    chocolateChips: 4,
  };
  
  console.log(cookieRecipie);
  console.log(cookieBaseRecipie);

  const Recipes = () => {
      const [recipe, setRecipe] = useState({})
      return (
          <div>
              <h3>Current Recipe:</h3>
              <button onClick={() => setRecipe(cookieRecipie)}>Cookie Recipe</button>
              <button onClick={() => setRecipe(cookieBaseRecipie)}>Cookie Base Recipe</button>
            
              <ul>
                {Object.keys(recipe).map((material) => (
                  <li key={material}>
                    {material}: {recipe[material]}
                  </li>
                ))}
              </ul>
          </div>
      );
  };

  export default Recipes;