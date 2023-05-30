import React from "react";
import { useParams } from "react-router-dom";
import useDrinkByIngredient from "../hooks/useDrinkByIngredient";
import DrinkList from "./DrinkList";

interface DrinkByIngredientProps {}

export const DrinkByIngredient: React.FC<DrinkByIngredientProps> = ({}) => {
  const { ingredient } = useParams();
  const { drinks, loading } = useDrinkByIngredient(ingredient);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (drinks.length === 0) {
    return <div>No drinks found.</div>;
  }
  return <DrinkList drinks={drinks} category={`${ingredient} drinks`} />;
};
export default DrinkByIngredient;
