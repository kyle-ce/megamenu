import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Search = () => {
  return (
    <form className="relative flex items-center justify-between w-full group ">
      <input
        type="text"
        id="search"
        name="search"
        className="w-full px-4 py-1 text-black rounded-xl"
      />
      <button className="absolute top-0 right-0 z-10 text-black transition duration-300 group-focus-within:opacity-0 group-focus-within:invisible">
        <FiSearch className="h-8 mr-2 text-center "></FiSearch>
      </button>
      <button className="absolute top-0 right-0 z-10 text-black transition duration-300 opacity-0 group-focus-within:opacity-100 group-focus-within:visible">
        <MdClose className="h-8 mr-2 text-center "></MdClose>
      </button>
      <label
        htmlFor="search"
        className="absolute left-0 px-4 text-black transition duration-300 group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-white group-focus-within:-translate-x-4"
      >
        Search
      </label>
    </form>
  );
};

export default Search;
