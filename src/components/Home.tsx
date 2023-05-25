import React from "react";
import CategoryList from "./CategoryList";
import DrinkList from "./DrinkList";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return <DrinkList category={"Cocktail"} />;
};
export default Home;
