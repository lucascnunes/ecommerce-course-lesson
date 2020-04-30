import React from "react";
import { Switch, Route } from "react-router-dom";

import { auth } from "./utils/firebase";

import Header from "./components/Header";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import SignInPage from "./pages/SignIn";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/about"></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
