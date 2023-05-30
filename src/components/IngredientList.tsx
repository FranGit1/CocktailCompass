import React from "react";
import useIngredients from "../hooks/useIngredients";
import DrinkIngredient from "../model/DrinkIngredient";
import IngredientComponent from "./IngredientComponent";
import { Link } from "react-router-dom";

export const CategoryList: React.FC = () => {
  const ingredients: DrinkIngredient[] | null = useIngredients();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {ingredients?.map((ingredient) => (
        <Link to={`/drinkByIngredient/${ingredient.strIngredient1}`}>
          <IngredientComponent
            key={ingredient.strIngredient1}
            ingredient={ingredient}
          />
        </Link>
      ))}
    </div>
  );
};
export default CategoryList;
