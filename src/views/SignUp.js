import React from 'react';
import SignUpForm from '../components/signup/SignUpForm';
import FormDivider from '../components/signup/FormDivider';
import '../styles/SignUp.css';

const SignUp = () => {
  return (
    <div className="SignUp__root container">
      <div className="row">
        <div className="six columns offset-by-three">
          <div className="SignUp__form-wrapper">
            <h1>SignUp!!!</h1>
            <SignUpForm />
            <FormDivider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
