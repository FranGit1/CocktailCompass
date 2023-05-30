import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDrinkDetails from "../hooks/useDrinkDetails";
import Drink from "../model/Drink";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface DrinkDetailsProps {
  drinkP?: Drink | null;
}
export const DrinkDetails: React.FC<DrinkDetailsProps> = ({ drinkP }) => {
  const { id } = useParams();

  let drink: Drink | null = null;

  if (drinkP == null) {
    drink = useDrinkDetails(id);
    console.log(drink);
  } else {
    drink = drinkP;
  }

  useEffect(() => {
    console.log(drink);
  }, [drink]);

  return (
    <div className=" mx-auto p-8 flex flex-col md:flex-row">
      <div className="block md:hidden">
        <h1 className="mb-4 text-3xl   font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
            {drink?.strDrink}
          </span>
        </h1>
      </div>
      <div>
        <img
          src={drink?.strDrinkThumb}
          className="h-auto max-w-full md:h-80 md:w-90 md:object-contain "
        />
        <div className="flex justify-between md:flex-col flex-row mt-4 ">
          <div>
            <strong className="md:font-bold text-sm  font-semibold">
              Category:
            </strong>{" "}
            {drink?.strCategory}
          </div>
          <div className="">
            <strong className="md:font-bold text-sm font-semibold ">
              Alcoholic:
            </strong>
            {drink?.strAlcoholic === "Alcoholic" ? (
              <CheckIcon />
            ) : (
              <CloseIcon />
            )}
          </div>
          <div className="md:ml-0 ml-0">
            <strong className="md:font-bold text-sm  font-semibold">
              Glass Type:
            </strong>{" "}
            {drink?.strGlass}
          </div>
        </div>
      </div>
      <div className="md:ml-12 md:mt-0 ml-0 mt-6">
        <h1 className="text-4xl font-bold mb-8 text-left text-darkRed hidden md:block">
          {drink?.strDrink}
        </h1>
        <div className="my-3">{drink?.strInstructions}</div>

        <div className="flex md:gap-16 justify-between md:justify-normal	 pt-8">
          <div>
            <h2 className="md:text-2xl text-lg font-semibold mb-2">
              Ingredients
            </h2>
            <ul>
              {Array.from({ length: 20 }).map((_, ind) => {
                const ingredient =
                  drink && drink[`strIngredient${ind + 1}` as keyof Drink];
                return ingredient ? (
                  <li key={ind + 1}>
                    {ind + 1}. {ingredient}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          <div>
            <h2 className="md:text-2xl text-lg  font-semibold mb-2">
              Measures
            </h2>

            <ul>
              {Array.from({ length: 20 }).map((_, ind) => {
                const measure =
                  drink && drink[`strMeasure${ind + 1}` as keyof Drink];
                return measure ? (
                  <li key={ind + 1}>
                    {ind + 1}. {measure}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrinkDetails;
