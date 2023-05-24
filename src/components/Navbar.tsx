import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { Link, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContextProvider";

interface NavbarProps {
  direction: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ direction }) => {
  const { pathname } = useLocation();
  const { setMenuOn } = useContext(MenuContext);

  const handleIconClick = (): void => {
    setMenuOn(true);
  };

  return (
    <div
      className={`${
        direction
          ? "inline-flex justify-center items-center flex-col space-y-4 mt-14 mr-5  "
          : "grid grid-cols-3 gap-4 justify-center mt-7"
      }  `}
    >
      <Link
        to="/"
        className={`flex flex-col items-center  px-3 py-2  rounded-md text-grey ${
          pathname === "/" ? "bg-white shadow-lg md:shadow-none" : ""
        } hover:bg-white group min-w-fit md:w-24
        
        
        
        
        
        
        
        `}
        onClick={handleIconClick}
      >
        <div className="">
          {pathname === "/" ? (
            <HomeOutlinedIcon sx={{ color: "#3A1078" }} fontSize="large" />
          ) : (
            <HomeOutlinedIcon fontSize="large" />
          )}
        </div>
        <span
          className={`mt-2 text-sm font-semibold  ${
            pathname === "/" ? "text-darkRed " : ""
          } group-hover:text-darkRed`}
        >
          Home
        </span>
      </Link>
      <Link
        to="/ingredients"
        className={`flex flex-col items-center  px-3 py-2  rounded-md text-grey ${
          pathname === "/ingredients"
            ? "bg-white  shadow-lg md:shadow-none"
            : ""
        } hover:bg-white group  min-w-fit md:w-24 `}
        onClick={handleIconClick}
      >
        <div className="">
          {pathname === "/ingredients" ? (
            <LiquorOutlinedIcon sx={{ color: "#3A1078" }} fontSize="large" />
          ) : (
            <LiquorOutlinedIcon fontSize="large" />
          )}
        </div>
        <span
          className={`mt-2 text-sm font-semibold  ${
            pathname === "/ingredients" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Ingredients
        </span>
      </Link>

      <Link
        to="/random"
        className={`flex flex-col items-center  px-3 py-2  rounded-md text-grey ${
          pathname === "/random" ? "bg-white  shadow-lg md:shadow-none" : ""
        } hover:bg-white group  min-w-fit md:w-24 `}
        onClick={handleIconClick}
      >
        <div className="">
          {pathname === "/random" ? (
            <LocalBarOutlinedIcon sx={{ color: "#3A1078" }} fontSize="large" />
          ) : (
            <LocalBarOutlinedIcon fontSize="large" />
          )}
        </div>
        <span
          className={`mt-2 text-sm font-semibold text-center ${
            pathname === "/random" ? "text-darkRed " : ""
          } group-hover:text-darkRed`}
        >
          Random Cocktail
        </span>
      </Link>

      <Link
        to="/favourite"
        className={`flex flex-col items-center  px-3 py-2 rounded-md text-grey ${
          pathname === "/favourite" ? "bg-white  shadow-lg md:shadow-none" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <div className="">
          {pathname === "/favorite" ? (
            <BookmarksOutlinedIcon sx={{ color: "#3A1078" }} fontSize="large" />
          ) : (
            <BookmarksOutlinedIcon fontSize="large" />
          )}
        </div>
        <span
          className={`mt-2 text-sm font-semibold  ${
            pathname === "/favourite" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Favourite
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
