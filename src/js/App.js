import React from "react";
import { createRoot } from "react-dom";

const data = [
  {
    category: "jumpers",
    items: [
      {
        imageUrl: "/images/jumper_blue_11.jpg",
        itemInfo: {
          itemName: "Blue Castle #1",
          itemDescription: "111ft W x 11ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "/images/jumper_blue_13.jpeg",
        itemInfo: {
          itemName: "Blue Castle #2",
          itemDescription: "13ft W x 13ft L",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "./images/jumper_pink_11",
        itemInfo: {
          itemName: "Pink Castle #1",
          itemDescription: "11ft W x 11ft L",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "./images/jumper_pink_13.jpeg",
        itemInfo: {
          itemName: "Pink Castle #2",
          itemDescription: "13ft W x 13ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "./images/jumper_combo.jpeg",
        itemInfo: {
          itemName: "Combo Slide",
          itemDescription: "16ft W x 24ft L ",
          itemCost: "$110",
        },
      },
      {
        imageUrl: "./images/jumper_jungle.jpeg",
        itemInfo: {
          itemName: "Jungle",
          itemDescription: "13ft W x 13ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "./images/jumper_sport.jpeg",
        itemInfo: {
          itemName: "Sports",
          itemDescription: "13ft W x 13ft L ",
          itemCost: "$70",
        },
      },
      {
        imageUrl: "./images/waterslide.jpeg",
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

const ItemImage = (props) => {
  return <img className="item-image" src={props.imageUrl} alt="" />;
};

const ItemCaption = (props) => {
  return (
    <figcaption className="item-info">
      <div className="item-name">{props.itemName}</div>
      <div className="item-description">{props.itemDescription}</div>
      <div className="item-cost">{props.itemCost}</div>
    </figcaption>
  );
};

const Item = (props) => {
  return (
    <figure className="item">
      <ItemImage key={props.imageUrl} imageUrl={props.imgUrl} />

      <ItemCaption
        key={props.itemInfo.itemName}
        itemName={props.itemInfo.itemName}
        itemDescription={props.itemInfo.itemDescription}
        itemCost={props.itemInfo.itemCost}
      />
    </figure>
  );
};

const ItemSection = (props) => {
  return (
    <div className="item-section">
      <h2 className="section-header">{props.sectionName}</h2>
      <section className="grid-container">
        <div className="item-grid">
          {props.sectionItems.map((item) => {
            return (
              <Item
                key={item.imageUrl}
                imgUrl={item.imageUrl}
                itemInfo={item.itemInfo}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

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

createRoot(document.getElementById("catalog")).render(<Catalog />);

/*
ReactDOM.render(
  React.createElement(Catalog),
  document.getElementById("catalog")
);
*/
