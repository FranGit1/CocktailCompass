import { useState, useEffect } from "react";
import axios from "axios";
import Drink from "../model/Drink";

function useDrinksByCategory(category: string | undefined): Drink[] {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const { drinks } = response.data;

        const fetchedDrinks = drinks.map((drink: any) => ({
          strDrink: drink.strDrink,
          strDrinkThumb: drink.strDrinkThumb,
          idDrink: drink.idDrink,
        }));

        setDrinks(fetchedDrinks);
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    }

    fetchDrinks();
  }, [category]);

  return drinks;
}

export default useDrinksByCategory;
