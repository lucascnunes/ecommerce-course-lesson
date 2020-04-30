import React from "react";

import { signInWithGoogle } from "../../utils/firebase";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

import "./styles.sass";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your own email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email address"
          />
          <FormInput
            type="password"
            name="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="button-group">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Continue with <strong>Google</strong>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
