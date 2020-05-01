import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./utils/firebase";

import { selectCurrentUser } from "./store/user/selectors";

import Header from "./components/Header";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import SignInPage from "./pages/SignIn";
import CheckoutPage from "./pages/Checkout";

import "./App.css";

import { setCurrentUser } from "./store/user/actions";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/about"></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInPage />
            }></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
