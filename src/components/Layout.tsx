import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { OfferContext } from "../context/OfferContextProvider";
import Offer from "./Offer";
import Search from "./Search";
import Navbar from "./Navbar";
import hamburger from "../assets/ham.svg";
import logo from "../assets/cocktailLogo.png";
import exitHamburger from "../assets/exit.svg";
import { LatestNewsContext } from "../context/LatestNewsContextProvider";
import { MenuContext } from "../context/MenuContextProvider";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  const { showOffer } = useContext(OfferContext);
  const { showLatest, setShowLatest } = useContext(LatestNewsContext);
  const [featured, setFeatured] = useState(true);
  const { menuOff, setMenuOn } = useContext(MenuContext);
  const { pathname } = useLocation();

  const handleClickFeature = (): void => {
    setFeatured(true);
    setShowLatest(false);
  };

  const handleClickMenu = (): void => {
    setMenuOn(!menuOff);
  };

  return (
    <main className="App">
      <div className="hidden md:block">{showOffer && <Offer />}</div>
      <div className="mt-10 px-5 md:px-[15%]  ">
        <div className="home-container mx-auto md:ml-10 flex flex-col   items-center md:flex-row md:items-center">
          <div
            className={`flex ${
              !menuOff
                ? "flex-col-reverse items-center"
                : "justify-between items-center "
            } w-full md:w-fit`}
          >
            <div className="flex items-center pb-6 md:pb-0">
              <img src={logo} className="pr-2" />
              <div>
                <h1 className="text-darkRed pr-10 font-extrabold	 text-3xl   md:mr-5  ">
                  Cocktail
                </h1>

                <h1 className="mb-4 text-3xl pr-10 pl-6 md:mr-5 md:mb-0  font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-myBlack from-darkRed">
                    Compass
                  </span>
                </h1>
              </div>
            </div>
            <div
              className={` ${
                !menuOff ? "flex justify-between w-full md:w-fit" : ""
              }`}
            >
              <div className={` ${!menuOff ? " invisible" : "hidden"}`}>
                place
              </div>
              <button
                onClick={handleClickMenu}
                className="block mb-4 md:mb-0  md:hidden "
              >
                <img
                  src={menuOff ? hamburger : exitHamburger}
                  className={` ${!menuOff ? "mb-10" : ""}`}
                />
              </button>
            </div>
          </div>
          <div
            className={` ${
              !menuOff ? "mt-10 w-full md:w-auto" : "w-full md:w-auto"
            } md:grow md:mr-44 pb-4 md:pb-0 `}
          >
            <Search />
          </div>
        </div>

        {menuOff && (
          <div className="flex mt-5 items-start justify-center md:justify-start ">
            <div className="hidden md:block">
              <Navbar direction={true} />
            </div>
            <div className="flex-col text-myBlack">
              {pathname == "/" && (
                <div className="flex justify-center py-4 font-semibold  md:hidden	">
                  <div
                    onClick={handleClickFeature}
                    className={` py-3 px-5 cursor-pointer pb-6 md:pb-0 ${
                      featured || !showLatest
                        ? "bg-redTrans rounded-3xl text-darkRed"
                        : ""
                    }`}
                  >
                    Featured
                  </div>
                </div>
              )}
              <hr className="h-px my-8 bg-gray-200 border-0 hidden md:block" />

              <Outlet />
            </div>
          </div>
        )}

        {!menuOff && <Navbar direction={false} />}
      </div>
    </main>
  );
};
export default Layout;
