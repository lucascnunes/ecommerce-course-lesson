import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../store/cart/actions";

import CustomButton from "../CustomButton";

import "./styles.sass";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProp)(CollectionItem);
