import React, { Component } from 'react';
import '../../styles/SignInForm.css';

class SignInForm extends Component {
  render() {
    return (
      <form className="SignInForm__root">
        <fieldset>
          <input
            type="text"
            placeholder="Email"
            className="SignInForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            placeholder="Password"
            className="SignInForm__input"
          />
        </fieldset>
        <button
          className="SignInForm__button"
          type="submit">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignInForm__spinner" />
        </button>
      </form>
    );
  }
}


export default SignInForm;