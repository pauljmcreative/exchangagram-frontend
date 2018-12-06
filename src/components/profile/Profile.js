import React, { Component } from 'react';
import UsersAPI from '../../models/UsersAPI';
import AvatarsAPI from '../../models/AvatarsAPI';
import jwt_decode from 'jwt-decode';
import '../../styles/Profile.css';




class Profile extends Component {
  state = {
    avatar: '',
    user: {},
  }

  componentDidMount = () => {
    if (this.props.user._id) {
      this.fetchAvatar(this.props.user._id);
      this.fetchUserById(this.props.user._id);
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchAvatar(this.props.user._id);
      this.fetchUserById(this.props.user._id);
    }
  }

  fetchUserById = (userId) => {
    UsersAPI.show(userId)
      .then(res => {
        this.setState({
          user: res.data,
        })
      })
  }

  fetchAvatar = (avatarId) => {
    AvatarsAPI.avatar(avatarId)
      .then(res => {
        this.setState({
          avatar: res.data[0].avatarName
        })
      })
      .catch(err => console.log("error", (err)))
  }


  render() {
    // console.log("PROFILE", this.state)
    // console.log("PROFILE", this.props.user._id)
    let profileData;
    if (this.props.user) {
      const user = this.props.user;
      const decoded = jwt_decode(localStorage.getItem("egt"));
      profileData = (
        <div className="row Profile__user-container">
          <div className="Profile__user-container-flex">

            <div className="Profile__avatar-container four columns">
              <div className="Profile__avatar-img-wrapper">
                {this.state.avatar ? <img
                  src={`http://localhost:4000/avatars/${this.state.avatar}`}
                  className="Profile__avatar-img"
                  alt='profile'
                /> : null}
              </div>
            </div>

            <div className="Profile__txt">
              <h3 className="Profile__username">{user.username}</h3>
              {decoded.user.id === this.props.match.params.user_id ?
                <React.Fragment>
                  <div className="Profile__btns">
                    <button className="Profile__button" onClick={this.props.updateEditProfile}>
                      <i class="fa fa-edit fa-2x "></i></button>
                    <button className="Profile__button" onClick={this.props.handleLogout}>
                      <i class="fa fa-sign-out fa-2x"></i>
                    </button>
                  </div>
                </React.Fragment> : <button>Follow</button>}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="Profile__user-info-container">
        <div className="Profile__root container">
          {profileData}
        </div>
      </div>
    )
  }
}


export default Profile;



