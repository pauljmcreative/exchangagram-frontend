import React, { Component } from "react";
import Profile from "../components/profile/Profile";
import GridList from "../components/profile/GridList";
import EditProfileForm from "../components/profile/EditProfileForm";
import PostsAPI from "../models/PostsAPI";
// import AvatarsAPI from '../models/AvatarsAPI';
import GridModal from "../components/profile/GridModal";
import UsersAPI from "../models/UsersAPI";
import "../styles/ProfileContainer.css";

class ProfileContainer extends Component {
  state = {
    posts: [],
    user: {},
    editProfile: false
  };

  componentDidMount = () => {
    this.fetchPosts();
    this.fetchUser(this.props.match.params.user_id);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchPosts();
      this.fetchUser(this.props.match.params.user_id);
    }
  };

  fetchPosts = () => {
    PostsAPI.index().then(res => {
      this.setState({
        posts: res.data
      });
    });
  };

  fetchUser = id => {
    UsersAPI.show(id).then(res => {
      // console.log('PROFILE CONTAINER RES', res.data)
      this.setState({
        user: res.data
      });
    });
  };

  updateEditProfile = () => {
    this.setState({
      editProfile: !this.state.editProfile
    });
  };

  renderGridModal() {
    const { activeGridIndex } = this.state;
    if (activeGridIndex === null) {
      return (
        <GridModal
          isOpen={this.state.gridModalIsOpen}
          closeModal={this.closeModal}
        />
      );
    }
    return (
      <GridModal
        isOpen={this.state.gridModalIsOpen}
        closeModal={this.closeModal}
        nextGridClick={this.nextGridClick}
        prevGridClick={this.prevGridClick}
      />
    );
  }

  render() {
    // console.log("PROFCONT..", this.state.user)

    const gridList = this.state.posts ? (
      <GridList
        posts={this.state.posts}
        userId={this.props.match.params.user_id}
      />
    ) : null;

    let profileSwitch;
    if (this.state.editProfile) {
      profileSwitch = (
        <div className="sign-in__root container">
          <div className="row">
            <div className="six columns offset-by-three">
              <div className="SignIn__form-wrapper">
                <EditProfileForm
                  user={this.state.user}
                  setUser={this.props.setUser}
                  updateEditProfile={this.updateEditProfile}
                  fetchUser={this.fetchUser}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      profileSwitch = (
        <div className="ProfileContainer__root">
          <div className="ProfileContainer__user- container">
            <Profile
              {...this.props}
              user={this.state.user}
              posts={this.state.posts}
              updateEditProfile={this.updateEditProfile}
            />
          </div>
          <div>{gridList}</div>
        </div>
      );
    }

    return profileSwitch;
  }
}

export default ProfileContainer;
