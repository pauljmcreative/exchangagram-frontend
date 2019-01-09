import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import AvatarsAPI from "../../models/AvatarsAPI";
import "../../styles/SignInForm.css";
import UsersAPI from "../../models/UsersAPI";

class EditProfileForm extends Component {
  state = {
    name: this.props.user.name,
    username: this.props.user.username,
    email: this.props.user.email
  };

  handleEditProfileChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEditProfileSubmit = e => {
    e.preventDefault();
    const profileData = {
      username: this.state.username,
      email: this.state.email,
      name: this.state.name
    };

    UsersAPI.update(this.props.user._id, profileData)
      .then(res => {
        localStorage.setItem("egt", res.data.token);
        const decoded = jwt_decode(res.data.token);
        if (document.getElementById("avatar-input").files.length == 0) {
          console.log("no files selected");
        } else {
          const avatarData = new FormData(document.querySelector("#avatar-upload"));
          AvatarsAPI.create(avatarData, decoded.user.id)
            .then(avatarRes => {
              console.log(avatarRes);
            })
            .catch(err => {
              console.log("Avatar did not load", err);
            });
        };
        this.props.setUser(decoded);
        this.props.fetchUser(decoded.user.id);
        this.props.updateEditProfile();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log("EDIT PROF", this.props.user)
    return (
      <React.Fragment>
        <h4>Edit profile...</h4>
        <form className="SignInForm__root">
          <fieldset>
            <input
              defaultValue={this.props.user.name}
              onChange={this.handleEditProfileChange}
              name="name"
              type="text"
              className="SignInForm__input"
            />
          </fieldset>
          <fieldset>
            <input
              defaultValue={this.props.user.username}
              onChange={this.handleEditProfileChange}
              name="username"
              type="text"
              className="SignInForm__input"
            />
          </fieldset>
          <fieldset>
            <input
              defaultValue={this.props.user.email}
              onChange={this.handleEditProfileChange}
              name="email"
              type="email"
              className="SignInForm__input"
            />
          </fieldset>
        </form>
        <form id="avatar-upload" encType="multipart/form-data">
          <fieldset>
            <div className="btn grey">
              <span>File</span>
              <input name="myAvatar" type="file" id="avatar-input" />
            </div>
          </fieldset>
        </form>
        <button
          onClick={this.handleEditProfileSubmit}
          className="SignInForm__button"
          type="submit"
        >
          Submit
        </button>
        <button onClick={this.props.updateEditProfile}>cancel</button>
      </React.Fragment>
    );
  }
}

export default withRouter(EditProfileForm);
