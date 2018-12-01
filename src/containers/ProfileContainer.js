import React, { Component } from 'react';
import Profile from '../components/Profile';


class ProfileContainer extends Component {

  componentDidMount() {
    //check for url params id
    //fetch user
  }


  render() {
    console.log('PROFILEcontainer>>', this.props)
    return (
      <div>
        <h1>PROFILE</h1>
        <Profile user={this.props.user} handleLogout={this.props.handleLogout} />
      </div>
    )
  }
}

export default ProfileContainer;


