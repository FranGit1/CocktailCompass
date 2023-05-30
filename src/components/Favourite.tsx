import React, { useEffect, useState } from "react";
import Drink from "../model/Drink";
import DrinkComponent from "./DrinkComponent";

export const Favourite: React.FC = () => {
  const [savedDrinks, setSavedDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const savedDrinksJson = localStorage.getItem("savedDrinks");
    if (savedDrinksJson) {
      const savedDrinksArray: Drink[] = JSON.parse(savedDrinksJson);
      setSavedDrinks(savedDrinksArray);
    }
  }, []);

  const handleRemove = (drink: Drink): void => {
    const filteredArticles = savedDrinks.filter(
      (savedDrink: Drink) => savedDrink.strDrink !== drink.strDrink
    );
    setSavedDrinks(filteredArticles);
    localStorage.setItem("savedDrinks", JSON.stringify(filteredArticles));
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
          Favourite
        </span>
      </h1>{" "}
      {savedDrinks.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedDrinks.map((drink: Drink) => (
            <DrinkComponent
              key={drink.strDrink}
              drink={drink}
              handleRemove={() => handleRemove(drink)}
            />
          ))}
        </div>
      ) : (
        <p>You have no saved drinks.</p>
      )}
    </>
  );
};
export default Favourite;
