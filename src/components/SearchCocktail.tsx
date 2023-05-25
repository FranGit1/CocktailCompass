import React from "react";
import { useParams } from "react-router-dom";
import useSearchByName from "../hooks/useSearchByName";
import Drink from "../model/Drink";
import DrinkList from "./DrinkList";

export const SearchCocktail: React.FC = () => {
  const { keyword } = useParams();

  const drinks: Drink[] = useSearchByName(keyword);

  return (
    <>
      {drinks.length !== 0 ? (
        <DrinkList category={`Search for ${keyword}`} drinks={drinks} />
      ) : (
        <div className="font-bold ">No results</div>
      )}
    </>
  );
};
export default SearchCocktail;
