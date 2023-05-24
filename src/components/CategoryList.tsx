import React from "react";
import DrinkCategory from "../model/DrinkCategory";
import useDrinkCategories from "../hooks/useDrinkCategories";
import Category from "./Category";

export const CategoryList: React.FC = () => {
  const drinkCategories: DrinkCategory[] | null = useDrinkCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {drinkCategories?.map((category) => (
        <Category key={category.strCategory} category={category} />
      ))}
    </div>
  );
};
export default CategoryList;
