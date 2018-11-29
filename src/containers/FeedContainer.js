import React, { Component } from 'react';
import PostContainer from './PostContainer';
import NewPostButton from '../components/posts/NewPostButton';
import NewPostModal from '../components/posts/NewPostModal';

class FeedContainer extends Component {
  state = {
    newPostModalIsOpen: false,
  }

  openModal = () => this.setState({ newPostModalIsOpen: true });
  closeModal = () => this.setState({ newPostModalIsOpen: false });

  // console.log('USERfeed', this.props.user)
  render() {
    return (
      <div>
        <h1>FEED</h1>
        {/* <PostContainer /> */}
        <NewPostButton onClick={this.openModal} />
        <NewPostModal
          isOpen={this.state.newPostModalIsOpen}
          onRequestClose={this.closeModal}
        />
      </div>
    );
  }
}

export default FeedContainer;



