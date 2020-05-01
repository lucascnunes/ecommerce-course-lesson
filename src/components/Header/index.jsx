import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../utils/firebase";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

import "./styles.sass";

const Header = ({ currentUser, hidden }) => (
  <div className="navbar">
    <Link className="navbar-brand" to="/">
      <Logo className="brand"></Logo>
    </Link>
    <div className="navbar-nav">
      <Link className="nav-item" to="/shop">
        shop
      </Link>
      <Link className="nav-item" to="/contact">
        contact
      </Link>
      {currentUser ? (
        <div className="nav-item" onClick={() => auth.signOut()}>
          sign out
        </div>
      ) : (
        <Link className="nav-item" to="/signin">
          sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
