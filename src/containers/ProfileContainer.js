import React, { Component } from 'react';
import Profile from '../components/Profile';


class ProfileContainer extends Component {
  render() {
    console.log('PROFILEcontainer', this.props.user)
    return (
      <div>
        <h1>PROFILE</h1>
        <Profile user={this.props.user} handleLogout={this.props.handleLogout} />
      </div>
    )
  }
}

export default ProfileContainer;


