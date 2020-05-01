import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../store/cart/selectors";
import { toggleCartHidden } from "../../store/cart/actions";

import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

import "./styles.sass";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
      inverted>
      go to checkout
    </CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
