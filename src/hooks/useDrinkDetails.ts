import { useState, useEffect } from "react";
import axios from "axios";
import Drink from "../model/Drink";

const useDrinkDetails = (drinkId: string | undefined): Drink | null => {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    const fetchDrinkDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        const { drinks } = response.data;

        if (drinks && drinks.length > 0) {
          const fetchedDrink: Drink = drinks[0];

          setDrink(fetchedDrink);
        } else {
          setDrink(null);
        }
      } catch (error) {
        console.error("Error fetching drink details:", error);
        setDrink(null);
      }
    };

    fetchDrinkDetails();
  }, [drinkId]);

  return drink;
};

export default useDrinkDetails;
