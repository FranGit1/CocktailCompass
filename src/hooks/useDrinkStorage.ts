import { useState } from "react";
import { toast } from "react-toastify";
import Drink from "../model/Drink";

interface DrinkProps {
  drink: Drink;
  handleRemove?: Function;
}

const useDrinkStorage = (drink: Drink) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (): void => {
    let savedDrinks = JSON.parse(localStorage.getItem("savedDrinks") || "[]");
    savedDrinks.push(drink);
    localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
    setIsSaved(true);
    toast.success("Drink saved as favorite!", { autoClose: 2000 });
  };

  return { isSaved, handleSave };
};

export default useDrinkStorage;
