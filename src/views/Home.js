import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';
import ProfileContainer from '../containers/ProfileContainer';
import '../styles/Home.css';

class Home extends Component {


  render() {
    // console.log('PROFILEhome', this.props)
    return (
      <div className="Home__root container">
        <Switch>
          <Route path="https://pauljmcreative.github.io/exchangagram-frontend/home/feed" render={props => <PostContainer {...props} user={this.props.user} />} />
          <Route path="https://pauljmcreative.github.io/exchangagram-frontend/home/profile/:user_id" render={props => <ProfileContainer {...props} user={this.props.user} setUser={this.props.setUser} handleLogout={this.props.handleLogout} />} />
        </Switch>
      </div>
    );
  }
}



export default Home;
