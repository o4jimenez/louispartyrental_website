const OrderItem = (props) => {
  return (
    <div className="orderItem">
      <input></input>
      <button>Add to Order</button>
    </div>
  );
};

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
      <OrderItem />
    </figure>
  );
};

export default Item;
