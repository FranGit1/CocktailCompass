import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import useDrinkDetails from "../hooks/useDrinkDetails";
import Drink from "../model/Drink";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
interface DrinkDetailsProps {}

export const DrinkDetails: React.FC<DrinkDetailsProps> = ({}) => {
  const { id } = useParams();
  const drink: Drink | null = useDrinkDetails(id);

  useEffect(() => {
    console.log(drink);
  }, [drink]);

  return (
    <div className=" mx-auto p-8 flex">
      <div>
        <img
          src={drink?.strDrinkThumb}
          className="h-auto max-w-full rounded-lg"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
          <div>
            <strong className="font-bold">Category:</strong>{" "}
            {drink?.strCategory}
          </div>
          <div>
            <strong className="font-bold">Alcoholic:</strong>
            {drink?.strAlcoholic === "Alcoholic" ? (
              <CheckIcon />
            ) : (
              <CloseIcon />
            )}
          </div>
          <div>
            <strong className="font-bold">Glass Type:</strong> {drink?.strGlass}
          </div>
        </div>
      </div>
      <div className=" ml-12">
        <h1 className="text-4xl font-bold mb-8 text-left text-darkRed">
          {drink?.strDrink}
        </h1>
        <div className="my-3">{drink?.strInstructions}</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 pt-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
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
            <h2 className="text-2xl font-semibold mb-2">Measures</h2>

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
