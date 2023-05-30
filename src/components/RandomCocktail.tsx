import React, { useEffect } from "react";
import useRandomCocktail from "../hooks/useRandomCocktail";
import Drink from "../model/Drink";
import DrinkList from "./DrinkList";
import DrinkDetails from "./DrinkDetails";

const RandomCocktail: React.FC = () => {
  const randomCocktail = useRandomCocktail();

  if (!randomCocktail) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  return <DrinkDetails drinkP={randomCocktail} />;
};

export default RandomCocktail;
