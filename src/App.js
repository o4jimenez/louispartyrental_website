import React from "react";
import { createRoot } from "react-dom";

import Header from "./Header";
import ItemSection from "./ItemSection";
/*
const data = [
  {
    category: "Jumpers",
    items: [
      {
        imageUrl: "./images/jumper_blue_11.jpeg",
        itemInfo: {
          itemName: "Blue Castle #1",
          itemDescription: "111ft W x 11ft L ",
          itemCost: "$70",
        },
      },
    ],
  },
];
*/
const data = [
  {
    category: "Jumpers",
    items: [
      {
        imageUrl:
          "https://d33wubrfki0l68.cloudfront.net/ef82b88d3efcc4d2564289ac7cfcec659892e598/df3c6/images/jumper_blue_11.jpeg",
        itemInfo: {
          itemName: "Blue Castle #1",
          itemDescription: "111ft W x 11ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "%PUBLIC_URL%/images/jumper_blue_11.jpeg",
        itemInfo: {
          itemName: "Blue Castle #2",
          itemDescription: "13ft W x 13ft L",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "./images/jumper_blue_11",
        itemInfo: {
          itemName: "Pink Castle #1",
          itemDescription: "11ft W x 11ft L",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "/images/jumper_pink_13.jpeg",
        itemInfo: {
          itemName: "Pink Castle #2",
          itemDescription: "13ft W x 13ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "images/jumper_pink_13.jpeg",
        itemInfo: {
          itemName: "Combo Slide",
          itemDescription: "16ft W x 24ft L ",
          itemCost: "$110",
        },
      },
      {
        imageUrl: "./public/images/jumper_pink_13.jpeg",
        itemInfo: {
          itemName: "Jungle",
          itemDescription: "13ft W x 13ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "public/images/jumper_blue_13.jpeg",
        itemInfo: {
          itemName: "Sports",
          itemDescription: "13ft W x 13ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "/public/images/jumper_blue_13.jpeg",
        itemInfo: {
          itemName: "Waterslide",
          itemDescription: "10ft H x 13ft W x 22ft L",
          itemCost: "$160",
        },
      },
    ],
  },
  {
    category: "Tables & Chairs",
    items: [
      {
        imageUrl: "./images/table_rectangle_6.jpeg",
        itemInfo: {
          itemName: "Rectangular Tables",
          itemDescription: "",
          itemCost: "$5",
        },
      },
      {
        imageUrl: "./images/table_round_60.jpeg",
        itemInfo: {
          itemName: "Large Round Table",
          itemDescription: "",
          itemCost: "$8",
        },
      },
      {
        imageUrl: "./images/table_round_48.jpeg",
        itemInfo: {
          itemName: "Small Round Table",
          itemDescription: "",
          itemCost: "$5",
        },
      },
      {
        imageUrl: "./images/table_chair_kids.jpeg",
        itemInfo: {
          itemName: "Kids Chairs & Tables",
          itemDescription: "Tables $5.00 each and Chairs $0.50 each ",
          itemCost: "",
        },
      },
      {
        imageUrl: "./images/table_cocktail.jpeg",
        itemInfo: {
          itemName: "Cocktail Table",
          itemDescription: "2.5ft or 3.5ft tall",
          itemCost: "$8",
        },
      },
      {
        imageUrl: "./images/chair_white.jpeg",
        itemInfo: {
          itemName: "White Folding Chair",
          itemDescription: "",
          itemCost: "$1",
        },
      },
      {
        imageUrl: "./images/chair_beige.jpeg",
        itemInfo: {
          itemName: "Beige Folding Chair",
          itemDescription: "",
          itemCost: "$0.75",
        },
      },
    ],
  },
  {
    category: "Tents & Canopies",
    items: [
      {
        imageUrl: "./images/tent_12x20.jpeg",
        itemInfo: {
          itemName: "12ft x 20ft Tent",
          itemDescription: "",
          itemCost: "$100",
        },
      },
      {
        imageUrl: "./images/tent_12X30.jpeg",
        itemInfo: {
          itemName: "12ft x 30ft Tent",
          itemDescription: "",
          itemCost: "$125",
        },
      },
      {
        imageUrl: "./images/tent_20x30.jpeg",
        itemInfo: {
          itemName: "20ft x 30ft Tent",
          itemDescription: "",
          itemCost: "$150",
        },
      },
      {
        imageUrl: "./images/canopy.jpeg",
        itemInfo: {
          itemName: "13ft x 13ft Canopy",
          itemDescription: "",
          itemCost: "$35",
        },
      },
    ],
  },
  {
    category: "Other Items",
    items: [
      {
        imageUrl: "./images/patio_heater.jpeg",
        itemInfo: {
          itemName: "Patio Heater",
          itemDescription: "",
          itemCost: "$65",
        },
      },
      {
        imageUrl: "./images/snowcone_machine.jpeg",
        itemInfo: {
          itemName: "Snowcone Machine",
          itemDescription: "",
          itemCost: "$50",
        },
      },
      {
        imageUrl: "./images/portable_bathroom.jpeg",
        itemInfo: {
          itemName: "Portable Bathroom",
          itemDescription: "",
          itemCost: "$100",
        },
      },
    ],
  },
];

const Catalog = () => {
  return (
    <div id="catalog">
      {data.map((obj) => {
        return (
          <ItemSection
            key={obj.category}
            sectionName={obj.category}
            sectionItems={obj.items}
          />
        );
      })}
    </div>
  );
};

//createRoot(document.getElementById("catalog")).render(<Catalog />);
createRoot(document.getElementById("header")).render(<Header />);
createRoot(document.getElementById("body")).render(<Catalog />);
