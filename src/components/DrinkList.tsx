import React from "react";
import useDrinksByCategory from "../hooks/useDrinksByCategory";
import Drink from "../model/Drink";
import { DrinkComponent } from "./DrinkComponent";
import { Link } from "react-router-dom";

interface DrinkListProps {
  category: string | undefined;
  drinks?: Drink[] | null;
}

export const DrinkList: React.FC<DrinkListProps> = ({ category, drinks }) => {
  if (drinks == null) {
    drinks = useDrinksByCategory(category);
  }

  return (
    <div>
      <h1 className="text-lg font-bold pb-2 text-center md:text-left">
        {category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {drinks?.map((drink) => (
          <Link
            key={drink.idDrink}
            to={`/drink/${drink.idDrink}`}
            className="cursor-pointer"
          >
            <DrinkComponent key={drink.strDrink} drink={drink} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default DrinkList;
