import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import '../../styles/SignInForm.css';
import UsersAPI from '../../models/UsersAPI';

class EditProfileForm extends Component {
  state = {
    name: '',
    username: '',
    email: '',
  }

  handleEditProfileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditProfileSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      username: this.state.username,
      email: this.state.email,
      name: this.state.name,
    };

    UsersAPI.update(this.props.user._id, profileData)
      .then(res => {
        localStorage.setItem('egt', res.data.token);
        const decoded = jwt_decode(res.data.token);
        this.props.setUser(decoded);
        this.props.fetchUser(decoded.user.id);
        this.props.updateEditProfile();
      })
      .catch(err => {
        console.log(err)
      })


  }

  render() {
    return (
      <React.Fragment>
        <form className="SignInForm__root">
          <fieldset>
            <input
              onChange={this.handleEditProfileChange}
              name="name"
              type="text"
              placeholder="Name"
              className="SignInForm__input"
            />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleEditProfileChange}
              name="username"
              type="text"
              placeholder="Username"
              className="SignInForm__input"
            />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleEditProfileChange}
              name="email"
              type="email"
              placeholder="email"
              className="SignInForm__input"
            />
          </fieldset>
        </form>
        <form id="image-upload" encType="multipart/form-data">
          <fieldset>
            <div class="btn grey">
              <span>File</span>
              <input name="myAvatar" type="file" />
            </div>
          </fieldset>
        </form>
        <button
          onClick={this.handleEditProfileSubmit}
          className="SignInForm__button"
          type="submit">
          Submit
        </button>
        <button
          onClick={this.props.updateEditProfile}
        >
          cancel
        </button>
      </React.Fragment>
    );
  }
}


export default withRouter(EditProfileForm);