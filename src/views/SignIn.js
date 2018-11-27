import React from 'react';
import SignInForm from '../components/signup/SignInForm';
import FormDivider from '../components/signup/FormDivider';
import '../styles/SignIn.css';

const SignIn = (props) => (
  <div className="sign-in__root container">
    <div className="row">
      <div className="six columns offset-by-three">
        <div className="SignIn__form-wrapper">
          <h1>Sign In!!!</h1>
          <SignInForm />
          <FormDivider />
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
