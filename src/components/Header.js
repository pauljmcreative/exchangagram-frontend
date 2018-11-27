import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    let links;
    if (this.props.isLoggedIn) {
      links =
        <ul>
          <li>
            <NavLink to="/home/feed">Home</NavLink>
          </li>
          <li>
            <NavLink to="/home/profile">Profile</NavLink>
          </li>
        </ul>
    } else {
      links =
        <ul>
          <li>
            <NavLink to="/">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
    }
    return (

      <header className="Header__root">
        <button onClick={this.props.toggleLogIn}>toggle</button>
        <div className="container">
          <div className="row  Header__container">
            <div className="three columns">
              <h1 className="Header__logo">
                <NavLink to="#" className="Header__logo-link">
                  <i className="fa fa-instagram Header__instagram-icon" aria-hidden="true" /> Exchangeagram</NavLink>
              </h1>
              {links}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;





