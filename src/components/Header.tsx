import { FiShoppingCart } from "react-icons/fi";
import Search from "./Search";
import Megamenu from "./Megamenu/Megamenu";

const Header = () => {
  return (
    <section className=" bg-[url('https://devv9-punchout.sherwin-williams.com/wcsstore/SherwinWilliamsPunchoutAssetStore/dist/images/sherwinStatic/bg_main-black-top-rxd.jpg')] object-fit">
      <div className="container relative flex flex-col justify-end px-4 pt-16 mx-auto rounded-md ">
        <div className="flex items-center justify-between mb-1 ">
          {/* LOGO */}
          <nav className="mx-2 ">
            <a href="/">
              <img
                className="w-64 "
                src="https://www.sherwin-williams.com/wcsstore/SherwinWilliamsAssetStore/dist/images/sherwinBg/_2x/branding_2x.png"
              ></img>
            </a>
          </nav>
          <div className="max-w-[600px] mx-5 w-full">
            <Search />
          </div>
          {/* CART */}
          <button className="relative p-4 text-white rounded-lg hover:shadow-lg hover:bg-zinc-50/50">
            <FiShoppingCart className="h-8 text-center "></FiShoppingCart>
          </button>
        </div>
        {/* Megamenu */}
        <Megamenu />
      </div>
    </section>
  );
};

export default Header;
