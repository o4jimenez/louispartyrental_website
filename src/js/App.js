import React from "react";
import { createRoot } from "react-dom";

const sectionList = [
  "Jumpers",
  "Tables & Chairs",
  "Tents & Canopies",
  "Other Items",
];

const ItemImage = () => {
  return <img className="item-image" src="/images/jumper_blue_11.jpeg" />;
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

const Item = () => {
  return (
    <figure className="item">
      <ItemImage />
      <ItemCaption
        itemName="Blue Castle #1"
        itemDescription="11ft W x 11ft L"
        itemCost="$70"
      />
    </figure>
  );
};

const ItemSection = (props) => {
  return (
    <div className="item-section">
      <h2 className="section-header">{props.sectionName}</h2>
      <section className="grid-container" tabIndex="0">
        <div className="item-grid">
          <Item />
        </div>
      </section>
    </div>
  );
};

const Catalog = () => {
  return (
    <div id="catalog">
      <ItemSection sectionName="Test" />
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
