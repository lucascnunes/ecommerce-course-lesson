import React from "react";

import SignInComponent from "../../components/SignIn";
import SignUpComponent from "../../components/SignUp";

import "./styles.sass";

const SignIn = () => (
  <div className="sign-in-and-sign-up">
    <SignInComponent />
    <SignUpComponent />
  </div>
);

export default SignIn;
