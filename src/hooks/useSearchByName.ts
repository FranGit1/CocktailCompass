import { useState, useEffect } from "react";
import axios from "axios";
import Drink from "../model/Drink";

const useSearchByName = (keyword: string | undefined): Drink[] => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ drinks: Drink[] }>(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
        );
        const { drinks } = response.data;
        setDrinks(drinks || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDrinks([]);
      }
    };

    if (keyword) {
      fetchData();
    } else {
      setDrinks([]);
    }
  }, [keyword]);

  return drinks;
};

export default useSearchByName;
