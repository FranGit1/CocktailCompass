import React from "react";
import Ingredient from "../model/DrinkIngredient";

interface IngredientProps {
  ingredient: Ingredient;
}

export const IngredientComponent: React.FC<IngredientProps> = ({
  ingredient,
}) => {
  return (
    <div className="bg-white shadow rounded-md max-w-fit relative flex flex-col place-content-between">
      <img
        src={ingredient.image}
        alt=""
        className="rounded-t-xl h-70 w-96 object-cover "
      />
      <div className="font-bold text-center pb-4">
        {ingredient.strIngredient1}
      </div>
    </div>
  );
};
export default IngredientComponent;
