import React, { Component } from 'react';
import '../styles/LikeButton.css';

class LikeButton extends Component {

  handleLikeClick = (event) => {
    event.preventDefault();
    console.log('Like Clicked!')
    // if (this.props.liked) {
    //   this.props.onDislike();
    // } else {
    //   this.props.onLike();
    // }
  }

  render() {
    return (
      <button
        className="LikeButton__root"
        onClick={this.handleLikeClick}>
        {/* {this.props.liked ?
          (<i className="fa fa-heart LikeButton__icon LikeButton__icon--liked" />) :
          (<i className="fa fa-heart-o LikeButton__icon" />)} */}
        <i className="fa fa-heart-o LikeButton__icon" />
      </button>
    );
  }
}

export default LikeButton;
