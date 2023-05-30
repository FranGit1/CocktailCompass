import React from "react";
import DrinkCategory from "../model/DrinkCategory";
interface CategoryProps {
  category: DrinkCategory;
}

export const CategoryComponent: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="bg-white shadow rounded-md max-w-fit relative flex flex-col place-content-between">
      <img
        src={category.image}
        alt=""
        className="rounded-t-xl h-80 w-96 object-contain "
      />
      <h1 className="mb-4 text-2xl text-center   font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
          {category.strCategory}
        </span>
      </h1>
    </div>
  );
};

export default CategoryComponent;
