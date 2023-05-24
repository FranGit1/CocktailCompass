import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../context/MenuContextProvider";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setMenuOn } = useContext(MenuContext);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    navigate(`/search/${query}`);
    // e.currentTarget.reset();
    setMenuOn(true);
  };

  return (
    <form
      id="form"
      role="search"
      onSubmit={handleSearch}
      className="bg-white h-30 rounded-lg flex flex-row items-center "
    >
      <div className="search-text flex w-full items-center">
        <SearchOutlinedIcon className="ml-4" />
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search cocktails"
          aria-label="Search through site content"
          ref={inputRef}
          className="w-full text-black px-4 py-2 focus:outline-none"
        />
      </div>
      <button
        className="srchButton cursor-pointer bg-darkRed rounded-md text-white px-4 py-2 uppercase font-medium border-none"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
