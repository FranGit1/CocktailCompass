import React from "react";
import DrinkCategory from "../model/DrinkCategory";
interface CategoryProps {
  category: DrinkCategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="bg-white shadow rounded-md max-w-fit relative flex flex-col place-content-between">
      <img
        src={category.image}
        alt=""
        className="rounded-t-xl h-70 w-96 object-cover "
      />
      <div className="font-bold text-center pb-4">{category.strCategory}</div>
    </div>
  );
};

export default Category;
