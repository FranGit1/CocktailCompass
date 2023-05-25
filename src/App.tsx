import { ToastContainer } from "react-toastify";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MenuContextProvider from "./context/MenuContextProvider";
import { OfferContextProvider } from "./context/OfferContextProvider";
import IngredientList from "./components/IngredientList";
import CategoryList from "./components/CategoryList";
import DrinkDetails from "./components/DrinkDetails";

function App() {
  return (
    <>
      <OfferContextProvider>
        <MenuContextProvider>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="ingredients" element={<IngredientList />} />
              <Route path="categories" element={<CategoryList />} />
              <Route path="drink/:id" element={<DrinkDetails />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </OfferContextProvider>
    </>
  );
}

export default App;
