import React, { Component } from 'react';
import '../styles/LikeButton.css';

class LikeButton extends Component {
  constructor(props) {
    super(props);
  }

  handleLikeClick = (event) => {
    event.preventDefault();
    if (this.props.liked) {
      this.props.onDislike();
    } else {
      this.props.onLike();
    }
  }

  render() {
    return (
      <button
        className="LikeButton__root"
        onClick={this.handleLikeClick}>
        {this.props.liked ?
          (<i className="fa fa-heart LikeButton__icon LikeButton__icon--liked" />) :
          (<i className="fa fa-heart-o LikeButton__icon" />)}
      </button>
    );
  }
}

export default LikeButton;
