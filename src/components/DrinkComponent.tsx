import React, { useState } from "react";
import Drink from "../model/Drink";
import { toast } from "react-toastify";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link, useLocation } from "react-router-dom";

interface DrinkProps {
  drink: Drink;
  handleRemove?: Function;
}

export const DrinkComponent: React.FC<DrinkProps> = ({
  drink,
  handleRemove,
}) => {
  const { pathname } = useLocation();
  const isFavoritesPage: boolean = pathname === "/favourite";
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (): void => {
    let savedDrinks = JSON.parse(localStorage.getItem("savedDrinks") || "[]");
    savedDrinks.push(drink);
    localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
    setIsSaved(true);
    toast.success("Drink saved as favorite!", { autoClose: 2000 });
  };

  const handleRemoveClick = (): void => {
    if (handleRemove) {
      handleRemove(drink);
      toast.success("Drink removed from favorites!", { autoClose: 2000 });
    }
  };

  return (
    <div className="bg-white shadow rounded-md max-w-fit relative flex flex-col place-content-between">
      <Link
        key={drink.idDrink}
        to={`/drink/${drink.idDrink}`}
        className="cursor-pointer"
      >
        <img
          src={drink.strDrinkThumb}
          alt=""
          className="rounded-t-xl h-70 w-96 object-cover "
        />
      </Link>
      <div className="flex justify-between items-center">
        <div className="font-bold text-center pb-4 pt-4 pl-2">
          {drink.strDrink}
        </div>

        {isFavoritesPage ? (
          <button onClick={handleRemoveClick}>
            <CloseRoundedIcon />
          </button>
        ) : (
          <button onClick={handleSave}>
            <FavoriteBorderRoundedIcon />
          </button>
        )}
      </div>
    </div>
  );
};
export default DrinkComponent;
