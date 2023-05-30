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
      <h1 className="mb-4 text-2xl text-center   font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
          {ingredient.strIngredient1}
        </span>
      </h1>
    </div>
  );
};
export default IngredientComponent;
