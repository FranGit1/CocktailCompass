import React from "react";
import Drink from "../model/Drink";

interface DrinkProps {
  drink: Drink;
}

export const DrinkComponent: React.FC<DrinkProps> = ({ drink }) => {
  return (
    <div className="bg-white shadow rounded-md max-w-fit relative flex flex-col place-content-between">
      <img
        src={drink.strDrinkThumb}
        alt=""
        className="rounded-t-xl h-70 w-96 object-cover "
      />
      <div className="font-bold text-center pb-4 pt-4">{drink.strDrink}</div>
    </div>
  );
};
export default DrinkComponent;
