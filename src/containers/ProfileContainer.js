import React, { Component } from 'react';
import Profile from '../components/profile/Profile';
import GridList from '../components/profile/GridList';
import EditProfileForm from '../components/profile/EditProfileForm';
import PostsAPI from '../models/PostsAPI';
// import AvatarsAPI from '../models/AvatarsAPI';
import GridModal from '../components/profile/GridModal';
import UsersAPI from '../models/UsersAPI';


class ProfileContainer extends Component {
  state = {
    posts: [],
    user: {},
    editProfile: false,
  }


  componentDidMount = () => {
    this.fetchPosts();
    this.fetchUser(this.props.match.params.user_id);
  }

  fetchPosts = () => {
    PostsAPI.index()
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }

  fetchUser = (id) => {
    UsersAPI.show(id)
      .then(res => {
        console.log(res)
        this.setState({
          user: res.data
        })
      })
  }

  updateEditProfile = () => {
    this.setState({
      editProfile: !this.state.editProfile
    })
  }

  renderGridModal() {
    const { activeGridIndex } = this.state;
    if (activeGridIndex === null) {
      return (
        <GridModal
          isOpen={this.state.gridModalIsOpen}
          closeModal={this.closeModal}
        />
      )
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
    console.log(this.props)
    let profileSwitch;
    if (this.state.editProfile) {
      profileSwitch =
        <div className="sign-in__root container">
          <div className="row">
            <div className="six columns offset-by-three">
              <div className="SignIn__form-wrapper">
                <EditProfileForm user={this.state.user} setUser={this.props.setUser} updateEditProfile={this.updateEditProfile}
                  fetchUser={this.fetchUser} />
              </div>
            </div>
          </div>
        </div>
    } else {
      profileSwitch =
        <div className="PhotoGrid__root">
          <Profile user={this.state.user} posts={this.state.posts} handleLogout={this.props.handleLogout} updateEditProfile={this.updateEditProfile} />
          <div className="PhotoGrid__grid-container Locations__photo-gallery">
            <GridList posts={this.state.posts} userId={this.props.match.params.user_id} />
          </div>
          {/* {this.renderGridModal()} */}
        </div>
    }

    return (
      profileSwitch
    );



  }
}


export default ProfileContainer;



