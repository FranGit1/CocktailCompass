import { useState, useEffect } from "react";
import axios from "axios";
import DrinkIngredient from "../model/DrinkIngredient";

function useIngredients(): DrinkIngredient[] {
  const [ingredients, setIngredients] = useState<DrinkIngredient[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        const { drinks } = response.data;

        const fetchedIngredients = drinks.map((drink: any) => {
          const ingredientName = drink.strIngredient1;
          const ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`;
          return { strIngredient1: ingredientName, image: ingredientImage };
        });

        setIngredients(fetchedIngredients);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    }

    fetchIngredients();
  }, []);

  return ingredients;
}

export default useIngredients;
