import React, { Component } from 'react';
import Profile from '../components/profile/Profile';
import GridList from '../components/profile/GridList';
import PostsAPI from '../models/PostsAPI';


class ProfileContainer extends Component {
  state = {
    posts: [],
  }
  componentDidMount = () => {
    this.fetchPosts();
  }

  fetchPosts = () => {
    PostsAPI.index()
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }


  render() {
    console.log('PROFILEcontainer>>', this.props)
    return (
      <div>
        <h1>PROFILE</h1>
        <Profile user={this.props.user} handleLogout={this.props.handleLogout} />
        <GridList posts={this.state.posts} userId={this.props.match.params.user_id} />
      </div>
    )
  }
}

export default ProfileContainer;


