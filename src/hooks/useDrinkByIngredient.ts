import { useEffect, useState } from "react";
import axios from "axios";
import Drink from "../model/Drink";

const useDrinkByIngredient = (ingredient: string | undefined) => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = response.data.drinks;
        if (data && data.length > 0) {
          setDrinks(data);
        } else {
          setDrinks([]);
        }
        setLoading(false);
      } catch (error) {
        console.log("Error fetching drinks:", error);
        setLoading(false);
      }
    };

    fetchDrinks();
  }, [ingredient]);

  return { drinks, loading };
};

export default useDrinkByIngredient;
