import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../store/cart/selectors";

import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

import "./styles.sass";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton inverted>go to checkout</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
