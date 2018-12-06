import React, { Component } from 'react';
import NewPostButton from '../components/posts/NewPostButton';
import NewPostModal from '../components/posts/NewPostModal';
import PostsList from '../components/posts/PostsList';
import PostsAPI from '../models/PostsAPI';

class FeedContainer extends Component {
  state = {
    newPostModalIsOpen: false,
    posts: [],
  }

  openModal = () => this.setState({ newPostModalIsOpen: true });
  closeModal = () => this.setState({ newPostModalIsOpen: false });


  componentDidMount = () => {
    this.fetchPosts();
  }

  fetchPosts = () => {
    PostsAPI.index()
      .then(res => {
        debugger;
        this.setState({
          posts: res.data
        })
      })
  }


  // console.log('USERfeed', this.props.user)
  render() {
    // console.log('POST CONTAINER POSTS>', this.props.user.user.id);
    let postModal;
    if (this.props.user.user) {
      postModal = (
        <NewPostModal
          fetchPosts={this.fetchPosts}
          userId={this.props.user.user.id}
          isOpen={this.state.newPostModalIsOpen}
          closeModal={this.closeModal}
          onRequestClose={this.closeModal}
        />
      )
    }
    return (
      <div>
        <PostsList posts={this.state.posts} user={this.props.user} fetchPosts={this.fetchPosts} />
        <NewPostButton onClick={this.openModal} />
        {postModal}
      </div>
    );
  }
}

export default FeedContainer;



