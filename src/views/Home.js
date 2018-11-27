import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewPostButton from '../components/posts/NewPostButton';
import NewPostModal from '../components/posts/NewPostModal';
import Feed from '../containers/FeedContainer';
import Profile from '../containers/ProfileContainer'

import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newPostModalIsOpen: false,
    }

    this.openModal = () => this.setState({ newPostModalIsOpen: true });
    this.closeModal = () => this.setState({ newPostModalIsOpen: false });
  }

  render() {
    return (
      <div className="Home__root container">
        <h1>MAIN PAGE</h1>
        <Switch>
          <Route exact path="/home/feed" component={Feed} />
          <Route exact path="/home/profile" component={Profile} />
        </Switch>
        <NewPostButton onClick={this.openModal} />
        <NewPostModal
          isOpen={this.state.newPostModalIsOpen}
          onRequestClose={this.closeModal}
        />
      </div>
    );
  }
}



export default Home;
