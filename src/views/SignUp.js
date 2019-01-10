import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/signup/SignUpForm';
import FormDivider from '../components/signup/FormDivider';
import '../styles/SignUp.css';

const SignUp = (props) => {
  // console.log(props)
  return (
    <div className="SignUp__root container">
      <div className="row">
        <div className="six columns offset-by-three">
          <div className="SignUp__form-wrapper">
            <h1>SignUp!!!</h1>
            <SignUpForm setUser={props.setUser} />
            <FormDivider />
            <Link className="signIn__link" to="/exchangragram-frontend/signup"><h4>sign in</h4></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
