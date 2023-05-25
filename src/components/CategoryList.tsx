import React from "react";
import DrinkCategory from "../model/DrinkCategory";
import useDrinkCategories from "../hooks/useDrinkCategories";
import CategoryComponent from "./CategoryComponent";
import { Link } from "react-router-dom";

export const CategoryList: React.FC = () => {
  const drinkCategories: DrinkCategory[] | null = useDrinkCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {drinkCategories?.map((category) => (
        <Link
          key={category.strCategory}
          to={`/drinksByCategory/${category.strCategory}`}
          className="cursor-pointer"
        >
          <CategoryComponent key={category.strCategory} category={category} />
        </Link>
      ))}
    </div>
  );
};
export default CategoryList;
