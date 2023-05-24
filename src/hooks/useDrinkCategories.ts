import { useEffect, useState } from "react";
import axios from "axios";
import DrinkCategory from "../model/DrinkCategory";

const useDrinkCategories = (): DrinkCategory[] | null => {
  const [categories, setCategories] = useState<DrinkCategory[] | null>(null);

  useEffect(() => {
    const fetchDrinkCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        const data = response.data;

        if (data && data.drinks) {
          const categoriesWithImages = data.drinks.map(
            (category: DrinkCategory) => {
              const imageName =
                category.strCategory
                  .replace("/", "")
                  .replace(/\s/g, "")
                  .toLowerCase() + ".png";
              const imagePath = `src/assets/${imageName}`;

              return {
                ...category,
                image: imagePath,
              };
            }
          );

          setCategories(categoriesWithImages);
        }
      } catch (error) {
        console.error("Error fetching drink categories:", error);
      }
    };

    fetchDrinkCategories();
  }, []);

  return categories;
};

export default useDrinkCategories;
