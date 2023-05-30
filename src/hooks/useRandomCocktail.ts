import { useEffect, useState } from "react";
import axios from "axios";
import Drink from "../model/Drink";

const useRandomCocktail = (): Drink | null => {
  const [randomCocktail, setRandomCocktail] = useState<Drink | null>(null);

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const { drinks } = response.data;
        if (drinks && drinks.length > 0) {
          const randomDrink: Drink = drinks[0];

          setRandomCocktail(randomDrink);
        }
      } catch (error) {
        console.error("Error fetching random cocktail:", error);
      }
    };

    fetchRandomCocktail();
  }, []);

  return randomCocktail;
};

export default useRandomCocktail;
