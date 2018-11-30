import React, { Component } from 'react';
import PostContainer from './PostContainer';
import NewPostButton from '../components/posts/NewPostButton';
import NewPostModal from '../components/posts/NewPostModal';

class FeedContainer extends Component {
  static defaultProps = {
    user: {
    }
  }

  state = {
    newPostModalIsOpen: false,
  }

  openModal = () => this.setState({ newPostModalIsOpen: true });
  closeModal = () => this.setState({ newPostModalIsOpen: false });

  // console.log('USERfeed', this.props.user)
  render() {
    console.log(this.props)
    let postModal;
    if (this.props.user.user) {
      postModal = (
        <NewPostModal
          userId={this.props.user.user.id}
          isOpen={this.state.newPostModalIsOpen}
          onRequestClose={this.closeModal}
        />
      )
    }
    return (
      <div>
        <h1>FEED</h1>
        {/* <PostContainer /> */}
        <NewPostButton onClick={this.openModal} />
        {postModal}
      </div>
    );
  }
}

export default FeedContainer;



