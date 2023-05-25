import React from "react";
import DrinkList from "./DrinkList";
import { useParams } from "react-router-dom";

export const DrinksByCategory: React.FC = () => {
  const { category } = useParams();

  return <DrinkList category={category} />;
};
export default DrinksByCategory;
