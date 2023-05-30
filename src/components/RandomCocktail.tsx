import React from "react";
import useRandomCocktail from "../hooks/useRandomCocktail";

import DrinkDetails from "./DrinkDetails";

const RandomCocktail: React.FC = () => {
  const randomCocktail = useRandomCocktail();

  if (!randomCocktail) {
    return <div>Loading...</div>;
  }

  return <DrinkDetails drinkP={randomCocktail} />;
};

export default RandomCocktail;
