import React from "react";
import MenuItem from "./MenuItem";

const Megamenu = () => {
  return (
    <nav className="text-white ">
      <ul className="flex items-end justify-between gap-6 ">
        <MenuItem name="General Industrial & Wood">
          <div>
            <li>
              <a href="#" className="font-semibold">
                Solvent Coating
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Catalysts & Hardeners</a>
            </li>
            <li>
              <a href="#">Topcoats</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Water Coating
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Topcoats</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Solvent Coating
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Topcoats</a>
            </li>
          </div>
        </MenuItem>
        <MenuItem className="xl:hidden" name="Coatings"></MenuItem>
        <MenuItem className="hidden xl:block" name="Interior Paint & Coatings">
          <div>
            <li>
              <a href="#" className="font-semibold">
                Paint & Coatings
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Primers
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Wood Stains, Sealers & clear Topcoats
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Commercial high-Performance Coatings
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Lacquers
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Aerosols
              </a>
            </li>
            <hr className="mb-4"></hr>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Concrete & Masonry Products
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li className=" hover:underline">
              <a href="#">Commercial Concrete Joint Sealants</a>
            </li>
            <li>
              <a href="#">Concrete Prperation Products</a>
            </li>
            <li>
              <a href="#">Decorative Concrete Products</a>
            </li>
            <li>
              <a href="#">Equipment & Supplies For Concrete</a>
            </li>
            <li>
              <a href="#">Protective Concrete Coatings & Waterproofers</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Faux Finishing
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Coatings</a>
            </li>
            <li>
              <a href="#">Tools & Accessories</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Floor Coatings
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Resinous Performance Floor Coatings</a>
            </li>
          </div>
        </MenuItem>
        <MenuItem className="hidden xl:block" name="Exterior Paint & Coatings">
          <div>
            <li>
              <a href="#" className="font-semibold">
                Paint & Coatings
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Primers
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Wood Stains, Sealers & clear Topcoats
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Commercial high-Performance Coatings
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Sliding Stains
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#" className="font-semibold">
                Aerosols
              </a>
            </li>
            <hr className="mb-4"></hr>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Concrete & Masonary Products
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li className=" hover:underline">
              <a href="#">Commercial Concrete Joint Sealants</a>
            </li>
            <li>
              <a href="#">Concrete Prperation Products</a>
            </li>
            <li>
              <a href="#">Decorative Concrete Products</a>
            </li>
            <li>
              <a href="#">Equipment & Supplies For Concrete</a>
            </li>
            <li>
              <a href="#">Protective Concrete Coatings & Waterproofers</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Deck Stains & Supplies
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Applicators</a>
            </li>
            <li>
              <a href="#">Finishes</a>
            </li>
            <li>
              <a href="#">Surface Preperation Clean-Up</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" className="font-semibold">
                Floor Coatings
              </a>
            </li>
            <hr className="mb-4"></hr>
            <li>
              <a href="#">Commercial Performance Floor Coatings</a>
            </li>
          </div>
        </MenuItem>
        <MenuItem
          className="hidden xl:block"
          name="Protective & Marine Coatings"
        >
          {/* Menu */}
        </MenuItem>
        <MenuItem name=" Equipment & Supplies">{/* Menu */}</MenuItem>
        <MenuItem name="SprayBuy">{/* Menu */}</MenuItem>
        <MenuItem name="FAQ">{/* Menu */}</MenuItem>
      </ul>
    </nav>
  );
};

export default Megamenu;
