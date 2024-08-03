import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Megamenu = () => {
  return (
    <section className=" bg-[url('https://devv9-punchout.sherwin-williams.com/wcsstore/SherwinWilliamsPunchoutAssetStore/dist/images/sherwinStatic/bg_main-black-top-rxd.jpg')] object-fit">
      <div className="container relative px-4 pt-16 pb-6 mx-auto rounded-md ">
        <div className="flex items-center justify-between mb-1 ">
          <nav className="ml-2 ">
            <a href="/">
              <img
                className="w-64 "
                src="https://www.sherwin-williams.com/wcsstore/SherwinWilliamsAssetStore/dist/images/sherwinBg/_2x/branding_2x.png"
              ></img>
            </a>
          </nav>
          <div className="flex max-w-[600px] w-full gap-6 ml-6 ">
            <form className="relative flex items-center justify-between w-full group ">
              <input
                type="text"
                id="search"
                name="search"
                className="w-full px-4 py-2 text-black rounded-xl"
              />
              <button className="absolute top-0 right-0 z-10 text-black transition duration-300 group-focus-within:opacity-0 group-focus-within:invisible">
                <FiSearch className="h-8 mt-1 mr-2 text-center "></FiSearch>
              </button>
              <button className="absolute top-0 right-0 z-10 text-black transition duration-300 opacity-0 group-focus-within:opacity-100 group-focus-within:visible">
                <MdClose className="h-8 mt-1 mr-2 text-center "></MdClose>
              </button>
              <label
                htmlFor="search"
                className="absolute left-0 px-4 text-black transition duration-300 group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-white group-focus-within:-translate-x-4"
              >
                Search
              </label>
            </form>
          </div>
          <button className="relative p-5 text-white rounded-lg hover:shadow-lg hover:bg-zinc-50/50">
            <FiShoppingCart className="h-8 text-center "></FiShoppingCart>
          </button>
        </div>
        <div className="flex items-end text-white">
          <nav className="">
            <ul className="flex gap-6 flexh-full ">
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  General Industrial
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50">
                  Industrial Wood
                </button>
                <div className="absolute invisible  w-full top-[100%] left-0  group-hover:visible shadow-lg rounded-lg opacity-0 translate-x-[100%]  group-hover:opacity-100 group-hover:translate-x-0   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Exterior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  Interior Paint & Coatings
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  Exterior Paint & Coatings
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  Protective & Marine Coatings
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  Equipment & Supplies
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  SprayBuy
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
              <li className=" group">
                <button className="px-3 py-2 rounded-lg group-hover:bg-zinc-50/50 ">
                  FAQ
                </button>
                <div className="absolute  invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]   transition-all duration-300">
                  <div className="p-6 font-semibold text-black">Interior</div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Megamenu;
