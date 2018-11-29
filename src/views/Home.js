import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewPostButton from '../components/posts/NewPostButton';
import NewPostModal from '../components/posts/NewPostModal';
import FeedContainer from '../containers/FeedContainer';
import ProfileContainer from '../containers/ProfileContainer';
import '../styles/Home.css';

class Home extends Component {


  render() {
    console.log('PROFILEhome', this.props)
    return (
      <div className="Home__root container">
        <h1>MAIN PAGE</h1>
        <Switch>
          <Route path="/home/feed" render={props => <FeedContainer user={this.props.user} />} />
          <Route path="/home/profile" render={props => <ProfileContainer user={this.props.user} handleLogout={this.props.handleLogout} />} />
        </Switch>
      </div>
    );
  }
}



export default Home;
