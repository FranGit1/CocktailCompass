import { ToastContainer } from "react-toastify";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MenuContextProvider from "./context/MenuContextProvider";
import { OfferContextProvider } from "./context/OfferContextProvider";

function App() {
  return (
    <>
      <OfferContextProvider>
        <MenuContextProvider>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </MenuContextProvider>
      </OfferContextProvider>
    </>
  );
}

export default App;
