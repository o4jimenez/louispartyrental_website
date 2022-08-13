import React from "react";
import Item from "./Item";

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

export default ItemSection;
