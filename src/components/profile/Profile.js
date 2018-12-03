import React, { Component } from 'react';
import UsersAPI from '../../models/UsersAPI';
import AvatarsAPI from '../../models/AvatarsAPI';



// getImageUrl = () => {
//   ${this.props.user.user.imageUrl ? ${imageUrl} : 'noImage';
// }

class Profile extends Component {
  state = {
    avatar: '',
    user: {},
  }

  componentDidMount = () => {
    if (this.props.user._id) {
      this.fetchAvatar(this.props.avatar._id);
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




  render() {
    console.log('PROFILEuser>>', this.props.user)
    let profileData;
    if (this.props.user.user) {
      const user = this.props.user.user;
      profileData = (
        <div className="row Profile__user-info-container">
          <div className="four columns">
            <div className="Profile__avatar-img-wrapper">
              <img
                src={`http://localhost:4000/image/${this.state.postImage}`}
                className="Profile__avatar-img"
                alt='profile'
              />
              <img
                src='../images.no-image.jpg'
                className="Profile__avatar-img"
                alt='profile'
              />
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



