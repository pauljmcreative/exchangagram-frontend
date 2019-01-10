import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';



class Header extends Component {

  render() {
    let links;
    if (this.props.isLoggedIn) {
      links =
        <ul className="Header__nav-group">
          <li className="Header__nav-link">
            <p className="Header__user">Hello {this.props.user.user.username}</p>
          </li>
          <li className="Header__nav-link">
            <NavLink to="/exchangagram-frontend/home/feed">
              <i className="fa fa-compass Header__nav-icon" aria-hidden="true" />
            </NavLink>
          </li>
          <li className="Header__nav-link Header__notification-nav">
            <a className="NotificationButton__button" href="/notifications">
              <i className="fa fa-heart-o Header__nav-icon" aria-hidden="true" />
            </a>
          </li>
          <li className="Header__nav-link">
            <NavLink to={`/exchangagram-frontend/home/profile/${this.props.user.user.id}`}>
              <i className="fa fa-smile-o Header__nav-icon" aria-hidden="true" />
            </NavLink>
          </li>
        </ul>
    } else {
      links =
        <ul className="Header__nav-group">
          <li className="Header__nav-link">
            <NavLink to="/exchangagram-frontend/">Sign In</NavLink>
          </li>
          <li className="Header__nav-link">
            <NavLink to="/exchangagram-frontend/signup">Sign Up</NavLink>
          </li>
        </ul>
    }
    return (

      <header className="Header__root">
        <div className="container">
          <div className="row  Header__container">
            <div className="three columns">
              <h1 className="Header__logo">
                <NavLink to="#" className="Header__logo-link">
                  <i className="fa fa-instagram Header__instagram-icon" aria-hidden="true" /> Exchangeagram</NavLink>
              </h1>
            </div>
            <nav className="offset-by-five four columns">
              {links}
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
