import React, { Component } from 'react';


// getImageUrl = () => {
//   ${this.props.user.user.imageUrl ? ${imageUrl} : 'noImage';
// }

class Profile extends Component {
  render() {
    console.log('PROFILE>>', this.props.user)
    let profileData;
    if (this.props.user.user) {
      const user = this.props.user.user;
      profileData = (
        <div className="row Profile__user-info-container">
          <div className="four columns">
            <div className="Profile__avatar-img-wrapper">
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



