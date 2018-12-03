import React, { Component } from 'react';
import GridModal from './GridModal';
import PostsAPI from '../../models/PostsAPI';
import ImagesAPI from '../../models/ImagesAPI';

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
      <div className="PhotoThumbnailItem__root">
        <img onClick={this.openModal} src={`http://localhost:4000/image/${this.state.postImage}`} />
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


{/* <div className="PhotoThumbnailItem__root" onClick={this.props.onClick}>
  <div
    style={this.getStyleObject()}
    className={`Profile__photo-image ${this.props.filter}`}
  />
  <div className="PhotoThumbnailItem__overlay">
    <div className="PhotoThumbnailItem__overlay-icons">
      <div className="PhotoThumbnailItem__likes-count">
        <i className="fa fa-heart" /> <span className="PhotoThumbnailItem__count">{this.props.likesCount}</span>
      </div>
      <div className="PhotoThumbnailItem__comments-count">
        <i className="fa fa-comment" /> <span className="PhotoThumbnailItem__count">{this.props.commentsCount}</span>
      </div>
    </div>
  </div>
</div> */}