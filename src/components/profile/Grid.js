import React, { Component } from 'react';
import GridModal from './GridModal';
import PostsAPI from '../../models/PostsAPI';
import ImagesAPI from '../../models/ImagesAPI';
import '../../styles/Grid.css';

class Grid extends Component {
  state = {
    gridModalIsOpen: false,
    post: {},
    postImage: '',
  }

  openModal = () => this.setState({ gridModalIsOpen: true });
  closeModal = () => this.setState({ gridModalIsOpen: false });


  componentDidMount = () => {
    if (this.props.post._id) {
      this.fetchImage(this.props.post._id);
      this.fetchPostById(this.props.post._id);
    }
  }

  fetchPostById = (postId) => {
    PostsAPI.show(postId)
      .then(res => {
        this.setState({
          post: res.data,
        })
      })
  }

  fetchImage = (postId) => {
    ImagesAPI.image(postId)
      .then(res => {
        this.setState({
          postImage: res.data[0].imageName
        })
      })
  }

  increaseLikes = () => {
    let likeCount = this.state.post.likes + 1;
    let increaseLikes = { likes: likeCount };
    PostsAPI.update(this.state.post._id, increaseLikes)
      .then(res => this.fetchPostById(this.state.post._id));
  }

  decreaseLikes = () => {
    let decreaseCount = this.state.post.likes - 1;
    let decreaseLikes = { likes: decreaseCount };
    PostsAPI.update(this.state.post._id, decreaseLikes)
      .then(res => this.fetchPostById(this.state.post._id));
  }


  render() {
    return (
      <div>
        <div className="Grid__thumbnail">
          {this.state.postImage ? <img onClick={this.openModal} src={`https://exchangagram-backend.herokuapp.com/image/${this.state.postImage}`} alt="Post" /> : null}
        </div>
        <GridModal
          post={this.state.post}
          isOpen={this.state.gridModalIsOpen}
          closeModal={this.closeModal}
          onRequestClose={this.closeModal}
        />
      </div>
    )
  }
}


export default Grid;



