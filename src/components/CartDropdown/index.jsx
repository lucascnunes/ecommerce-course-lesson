import React from "react";

import CustomButton from "../CustomButton";

import "./styles.sass";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton inverted>go to checkout</CustomButton>
  </div>
);

export default CartDropdown;
