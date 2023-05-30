import React from "react";
import Drink from "../model/Drink";
import { toast } from "react-toastify";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link, useLocation } from "react-router-dom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import useDrinkStorage from "../hooks/useDrinkStorage";

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
  const { isSaved, handleSave } = useDrinkStorage(drink);

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
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-xl line-clamp-1  ">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
            {drink?.strDrink}
          </span>
        </h1>

        {isFavoritesPage ? (
          <button onClick={handleRemoveClick}>
            <CloseRoundedIcon />
          </button>
        ) : (
          <button onClick={handleSave}>
            {isSaved ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default DrinkComponent;
