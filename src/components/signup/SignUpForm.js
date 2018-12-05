import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UsersAPI from '../../models/UsersAPI';
import jwt_decode from 'jwt-decode';
import '../../styles/SignUpForm.css';

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    errors: {},
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignupSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    if (this.validate(userData)) {
      UsersAPI.signup(userData)
        .then(res => {
          // console.log(res);
          localStorage.setItem('egt', res.data.token);
          const decoded = jwt_decode(res.data.token);
          // console.log(decoded);
          this.props.setUser(decoded);
        })
        .then(() => this.props.history.push('/home/feed'))
        .catch((error) => {
          console.log(error)
        })
        .then(res => console.log(res))
    }
  }



  validate = (values) => {
    let errors = {};
    let formIsValid = true;

    if (!values.name) {
      formIsValid = false;
      errors.name = '*Please enter your name.';
    }

    if (!values.email) {
      formIsValid = false;
      errors.email = '*Please enter your email.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      formIsValid = false;
      errors.email = '*Please re-enter your email.';
    }


    if (!values.username) {
      formIsValid = false;
      errors.username = '*Please enter your username.';
    } else if (values.username.length < 2) {
      formIsValid = false;
      errors.username = '*Please re-enter your username.';
    } else if (values.username.length > 30) {
      formIsValid = false;
      errors.username = '*Please re-enter your username.';
    } else if (!/^[A-Z0-9_-]{3,30}$/i.test(values.username)) {
      formIsValid = false;
      errors.username = '*Please re-enter your username.'
    } // Add uniqueness

    if (!values.password) {
      formIsValid = false;
      errors.password = '*Password is required';
    } else if (values.password.length < 8) {
      formIsValid = false;
      errors.password = '*Please re-enter password';
    }
    this.setState({
      errors: errors
    })
    return formIsValid;
  }



  render() {
    return (
      <form className="SignUpForm__root">
        <fieldset>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name"
            className="SignUpForm__input"
          />
          <div className="errorMsg">{this.state.errors.name}</div>
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="SignUpForm__input"
          />
          <div className="errorMsg">{this.state.errors.email}</div>
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
            className="SignUpForm__input"
          />
          <div className="errorMsg">{this.state.errors.username}</div>
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Create Password"
            className="SignUpForm__input"
          />
          <div className="errorMsg">{this.state.errors.password}</div>
        </fieldset>
        <button
          onClick={this.handleSignupSubmit}
          className="SignUpForm__button"
          type="submit">
          {/* <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignUpForm__spinner" /> */}
          Submit
        </button>
      </form>
    );
  }
}


export default withRouter(SignUpForm);

