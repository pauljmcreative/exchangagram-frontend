import React, { Component } from 'react';
import { Link } from 'react-router';
import ConfirmationModal from './ConfirmationModal';
import '../../styles/CommentItem.css';




class Comment extends Component {
  state = {
    modalIsOpen: false,
  };

  this.closeModal = () => this.setState({ modalIsOpen: false });
this.openModal = () => this.setState({ modalIsOpen: true });


componentDidMount = () => {
  this.fetchComments();
}

fetchComments = () => {
  CommentsAPI.index()
    .then(res => {
      this.setState({
        posts: res
      })
    })
}


renderBody() {
  const words = this.props.body.split(/\s+/);
  return (
    <span>
      {words.map((word, idx) => {
        if (word.indexOf('#') === 0) {
          return (
            <Link
              to={`/explore/tags/${word.substring(1)}`}
              key={idx}
              className="CommentItem__link">
              {` ${word}`}
            </Link>
          );
        } else if (word.indexOf('@') === 0) {
          return (
            <Link
              to={`/${word.substring(1)}`}
              key={idx}
              className="CommentItem__link">
              {` ${word}`}
            </Link>
          )
        } else {
          return ` ${word}`;
        }
      })}
    </span>
  )
}

render() {
  // const { username } = this.props;
  return (
    <div className="CommentItem__root">
      <strong><Link to={`/${username}`} className="CommentItem__username">{username}</Link></strong> {this.renderBody()}
      {this.props.deletable === true
        ? (
          <span className="CommentItem__delete-button" onClick={this.openModal}>
            <i className="fa fa-times" />
          </span>
        )
        : null}
      {this.props.deletable === true
        ? (
          <ConfirmationModal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            onConfirmClick={this.props.onDelete}
            confirmText="Delete Comment"
          />)
        : null}
    </div>
  );
}
}

export default Comment;

