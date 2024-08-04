import React from "react";
import MenuItem from "./MenuItem";

interface Subcategory {
  name: string;
  uniqueid: number;
}

interface Category {
  name: string;
  uniqueid: number;
  catalogGroupView: Subcategory[];
}

const catalog = [
  {
    name: "General Industrial",
    uniqueid: 1,
    catalogGroupView: [
      {
        name: "Solvent Coatings",
        uniqueid: 2,
        catalogGroupView: [
          {
            name: "Catalysts Hardenings & Topcoats",
            uniqueid: 3,
          },
          {
            name: "Topcoats",
            uniqueid: 4,
          },
        ],
      },
      {
        name: "Water Coatings",
        uniqueid: 5,
        catalogGroupView: [
          {
            name: "Topcoats",
            uniqueid: 6,
          },
        ],
      },
    ],
  },
  {
    name: "Industrial Wood",
    uniqueid: 7,
    catalogGroupView: [
      {
        name: "Solvent Coatings",
        uniqueid: 8,
        catalogGroupView: [
          {
            name: "Topcoats",
            uniqueid: 9,
          },
        ],
      },
    ],
  },
  {
    name: "Interior Paint & Coatings",
    uniqueid: 10,
    catalogGroupView: [
      {
        name: "Paint & Coatings",
        uniqueid: 11,
        catalogGroupView: [],
      },
      {
        name: "Primers",
        uniqueid: 12,
        catalogGroupView: [],
      },
      {
        name: "Wood Stains, Sealers & Clear Topcoats",
        uniqueid: 13,
        catalogGroupView: [],
      },
      {
        name: "Commerical High-Performance Coatings",
        uniqueid: 14,
        catalogGroupView: [],
      },
      {
        name: "Concrete & Masonry Products",
        uniqueid: 15,
        catalogGroupView: [
          {
            name: "Commercial Concrete Joint Sealants",
            uniqueid: 16,
          },
          {
            name: "Concrete Preparation Products",
            uniqueid: 17,
          },
          {
            name: "Decorative Concrete Products",
            uniqueid: 18,
          },
          {
            name: "Equipment & Supplies For Concrete",
            uniqueid: 19,
          },
          {
            name: "Protective Concrete Coatings & Waterproofers",
            uniqueid: 20,
          },
        ],
      },
      {
        name: "Aerosols",
        uniqueid: 21,
        catalogGroupView: [],
      },
      {
        name: "Faux Finishing",
        uniqueid: 22,
        catalogGroupView: [
          {
            name: "Coatings",
            uniqueid: 23,
          },
          {
            name: "Tools & Accessories",
            uniqueid: 24,
          },
        ],
      },
      {
        name: "Floor Coatings",
        uniqueid: 25,
        catalogGroupView: [
          {
            name: "Resinous Performance Floor Coatings",
            uniqueid: 26,
          },
        ],
      },
    ],
  },
  {
    name: "Exterior Paint & Coatings",
    uniqueid: 27,
    catalogGroupView: [
      {
        name: "Paint & Coatings",
        uniqueid: 28,
        catalogGroupView: [],
      },
      {
        name: "Primers",
        uniqueid: 29,
        catalogGroupView: [],
      },
      {
        name: "Wood Stains, Sealers & Clear Topcoats",
        uniqueid: 30,
        catalogGroupView: [],
      },
      {
        name: "Deck Stains & Supplies",
        uniqueid: 31,
        catalogGroupView: [
          {
            name: "Applicators",
            uniqueid: 32,
          },
          {
            name: "Finishes",
            uniqueid: 33,
          },
          {
            name: "Surface Preparation/Cleanup",
            uniqueid: 34,
          },
        ],
      },
      {
        name: "Siding Stains",
        uniqueid: 35,
        catalogGroupView: [],
      },
      {
        name: "Commerical High-Performance Coatings",
        uniqueid: 36,
        catalogGroupView: [],
      },
      {
        name: "Concrete & Masonry Products",
        uniqueid: 37,
        catalogGroupView: [
          {
            name: "Commercial Concrete Joint Sealants",
            uniqueid: 38,
          },
          {
            name: "Concrete Preparation Products",
            uniqueid: 39,
          },
          {
            name: "Decorative Concrete Products",
            uniqueid: 40,
          },
          {
            name: "Equipment & Supplies For Concrete",
            uniqueid: 41,
          },
          {
            name: "Protective Concrete Coatings & Waterproofers",
            uniqueid: 42,
          },
        ],
      },
      {
        name: "Aerosols",
        uniqueid: 43,
        catalogGroupView: [],
      },
      {
        name: "Faux Finishing",
        uniqueid: 44,
        catalogGroupView: [
          {
            name: "Coatings",
            uniqueid: 45,
          },
          {
            name: "Tools & Accessories",
            uniqueid: 46,
          },
        ],
      },
      {
        name: "Floor Coatings",
        uniqueid: 47,
        catalogGroupView: [
          {
            name: "Commercial Performance Floor Coatings",
            uniqueid: 48,
          },
        ],
      },
    ],
  },
  {
    name: "Protective & Marine Coatings",
    uniqueid: 49,
    catalogGroupView: [
      {
        name: "Concrete Products",
        uniqueid: 50,
        catalogGroupView: [
          {
            name: "Concrete Coatings",
            uniqueid: 51,
          },
        ],
      },
      {
        name: "High Performance Floor Coatings",
        uniqueid: 52,
        catalogGroupView: [],
      },
      {
        name: "Industrial High Performance Paints",
        uniqueid: 53,
        catalogGroupView: [],
      },
      {
        name: "Marine Coatings",
        uniqueid: 54,
        catalogGroupView: [],
      },
      {
        name: "Primers & Sealers",
        uniqueid: 55,
        catalogGroupView: [],
      },
      {
        name: "Tank Lining & Secondary Containment",
        uniqueid: 56,
        catalogGroupView: [],
      },
    ],
  },
  {
    name: "Equipment & Supplies",
    uniqueid: 57,
    catalogGroupView: [
      {
        name: "ProBuy",
        uniqueid: 58,
        catalogGroupView: [],
      },
      {
        name: "Brushes",
        uniqueid: 59,
        catalogGroupView: [],
      },
      {
        name: "Roller Covers, Frames & Accessories",
        uniqueid: 60,
        catalogGroupView: [
          {
            name: "Accessories",
            uniqueid: 61,
          },
          {
            name: "Roller Covers",
            uniqueid: 62,
          },
          {
            name: "Roller Frames",
            uniqueid: 63,
          },
          {
            name: "Mini Roller System",
            uniqueid: 64,
          },
          {
            name: "Poles",
            uniqueid: 65,
          },
          {
            name: "Trays, Buckets, Screens & Liners",
            uniqueid: 66,
          },
        ],
      },
      {
        name: "Tape & Masking",
        uniqueid: 67,
        catalogGroupView: [
          {
            name: "Masking Film",
            uniqueid: 68,
          },
          {
            name: "Masking Paper",
            uniqueid: 69,
          },
          {
            name: "Masking Tools & Kits",
            uniqueid: 70,
          },
          {
            name: "Tape",
            uniqueid: 71,
          },
        ],
      },
      {
        name: "Ladders, Scaffolds & Climbing Equipment",
        uniqueid: 72,
        catalogGroupView: [
          {
            name: "Accessories",
            uniqueid: 73,
          },
          {
            name: "Extension Ladders",
            uniqueid: 74,
          },
          {
            name: "Multi Ladders",
            uniqueid: 75,
          },
          {
            name: "Planks & Work Platforms",
            uniqueid: 76,
          },
          {
            name: "Scaffolding",
            uniqueid: 77,
          },
          {
            name: "Step Ladder",
            uniqueid: 78,
          },
          {
            name: "Step Stools ",
            uniqueid: 79,
          },
          {
            name: "Vehicle Racks",
            uniqueid: 80,
          },
        ],
      },
      {
        name: "Sandpaper & Abrasives",
        uniqueid: 81,
        catalogGroupView: [
          {
            name: "Draywall",
            uniqueid: 82,
          },
          {
            name: "Sandpaper Sheets & Discs",
            uniqueid: 83,
          },
          {
            name: "Sanding Pads",
            uniqueid: 84,
          },
          {
            name: "Sanding Sponges",
            uniqueid: 85,
          },
          {
            name: "Sanding Tools",
            uniqueid: 86,
          },
          {
            name: "Steel Wool",
            uniqueid: 87,
          },
        ],
      },
      {
        name: "Dropcloths & Plastic Sheeting",
        uniqueid: 88,
        catalogGroupView: [
          {
            name: "Canvas and Coated Canvas Drop Cloths",
            uniqueid: 89,
          },
          {
            name: "Plastic Drop Cloths",
            uniqueid: 90,
          },
          {
            name: "Plastic Sheeting",
            uniqueid: 91,
          },
          {
            name: "Speciality",
            uniqueid: 92,
          },
        ],
      },
      {
        name: "Caulks, Sealants & Caulking Tools",
        uniqueid: 93,
        catalogGroupView: [
          {
            name: "Caulking Tools",
            uniqueid: 94,
          },
          {
            name: "Caulks & Sealants",
            uniqueid: 95,
          },
        ],
      },
      {
        name: "Patching & Repair",
        uniqueid: 96,
        catalogGroupView: [
          {
            name: "Concrete Patch & Repair",
            uniqueid: 97,
          },
          {
            name: "Fillers & Putty",
            uniqueid: 98,
          },
          {
            name: "Glazing Compound",
            uniqueid: 99,
          },
          {
            name: "Patching Tapes and materials ",
            uniqueid: 100,
          },
          {
            name: "Patching Tools",
            uniqueid: 101,
          },
          {
            name: "Spackling & Patching Compounds",
            uniqueid: 102,
          },
          {
            name: "Texture Repair",
            uniqueid: 103,
          },
        ],
      },
      {
        name: "Painters Tools",
        uniqueid: 104,
        catalogGroupView: [
          {
            name: "Hand Tools",
            uniqueid: 105,
          },
          {
            name: "Knives & Blades",
            uniqueid: 106,
          },
          {
            name: "Putty/Joint Knives",
            uniqueid: 107,
          },
          {
            name: "Scrapers",
            uniqueid: 108,
          },
          {
            name: "Sundries",
            uniqueid: 109,
          },
          {
            name: "Wire Brushes",
            uniqueid: 110,
          },
          {
            name: "Work Lights",
            uniqueid: 111,
          },
          {
            name: "Coating Additives",
            uniqueid: 112,
          },
        ],
      },
      {
        name: "See All Equipment & Supplies",
        uniqueid: 113,
        catalogGroupView: [],
      },
    ],
  },
  {
    name: "SprayBuy",
    uniqueid: 114,
    catalogGroupView: [],
  },
  {
    name: "FAQ",
    uniqueid: 115,
    catalogGroupView: [],
  },
];

const Megamenu = () => {
  // some async logic to get catalog
  const renderSubCatagories = ({
    subcatagories,
  }: {
    subcatagories: Array<Subcategory>;
  }) => {
    return subcatagories.map((subcatagory) => {
      return (
        <li className="hover:underline " key={subcatagory.uniqueid}>
          <a href="#">{subcatagory.name}</a>
        </li>
      );
    });
  };
  const renderCategories = ({
    categories,
  }: {
    categories: Array<Category>;
  }) => {
    return categories.map((catagory) => {
      return (
        <ul className="" key={catagory.uniqueid}>
          <li>
            <a href="#" className="font-semibold">
              {catagory.name}
            </a>
          </li>
          <hr className="mb-4"></hr>
          {renderSubCatagories({ subcatagories: catagory.catalogGroupView })}
        </ul>
      );
    });
  };
  const renderTopCategories = () => {
    return catalog.map((department) => {
      return (
        <MenuItem key={department.uniqueid} name={department.name}>
          {renderCategories({ categories: department.catalogGroupView })}
        </MenuItem>
      );
    });
  };
  return (
    <nav className="text-white ">
      <ul className="flex items-end justify-between gap-6 ">
        {renderTopCategories()}
      </ul>
    </nav>
  );
};

export default Megamenu;
