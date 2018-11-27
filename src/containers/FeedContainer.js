import React, { Component } from 'react';
import PostContainer from './PostContainer';

class FeedContainer extends Component {
  render() {
    return (
      <div>
        <h1>FEED</h1>
        <PostContainer />
      </div>
    );
  }
}

export default FeedContainer;