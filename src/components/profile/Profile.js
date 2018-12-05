import React, { Component } from 'react';
import UsersAPI from '../../models/UsersAPI';
import AvatarsAPI from '../../models/AvatarsAPI';


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
  }

  // when we get to profile page
  // check user_loggedin_id and profile_id (id in the url)

  // if user_loggedin_id === profile_id (console.log(this.props) - look in 'match')
  // if(this.props.user.user.id === this.props.match.match._id)
  // render edit profile and logout button

  // else
  // render 'following-data'
  //axios call to backend with both IDS
  //if follow model EXISTS 

  // (if profile_id === followee_id && user_loggedin_id === this.props.match.params.user_id )

  //following-data = "Currently Following"
  //else
  //following-data = "Click to follow"
  // following button onclick
  //grab FOLLOWEE_ID from profile_id
  //grab FOLLOWER_ID from user_loggedin_id
  //axios call to create route with those 2 IDs


  render() {
    // console.log("PROFILE", this.state)
    console.log("PROFILE", this.props.user._id)
    let profileData;
    if (this.props.user) {
      const user = this.props.user;
      profileData = (
        <div className="row Profile__user-info-container">
          <div className="four columns">
            <div className="Profile__avatar-img-wrapper">
              {this.state.avatar ? <img
                src={`http://localhost:4000/avatars/${this.state.avatar}`}
                className="Profile__avatar-img"
                alt='profile'
                style={{ width: '100px', height: '100px' }}
              /> : null}
            </div>
          </div>
          <div className="five columns">
            <h3 className="Profile__username">{user.username}</h3>

            <div className="Profile__stats">
              <div className="Profile__stats-item">
                <span className="Profile__stats-count">{user.joinDate}</span>
              </div>
            </div>
          </div>

          <button onClick={this.props.updateEditProfile}>Edit Profile</button>
          <button onClick={this.props.handleLogout}>logout</button>
        </div>
      )
    }

    return (
      <div className="Profile__root container">
        {profileData}
      </div>
    )
  }
}


export default Profile;



