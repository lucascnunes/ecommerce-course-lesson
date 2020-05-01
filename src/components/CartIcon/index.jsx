import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../store/cart/actions";
import "./styles.sass";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  let itemCount = 0;
  if (cartItems && cartItems.length)
    cartItems.filter((item) => (itemCount += item.quantity));
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
