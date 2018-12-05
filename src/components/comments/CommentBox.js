import React, { Component } from 'react';
import '../../styles/CommentBox.css';
import CommentsAPI from '../../models/CommentsAPI';

class CommentBox extends Component {
  state = {
    commentBody: '',
  };

  handleCommentChange = (e) => {
    // console.log('comment event:', e);
    this.setState({ commentBody: e.target.value });
  }


  handleCommentKeyDown = (event) => {
    event.persist();
    // console.log('Comment submitted!!!!', event.keyCode);
    if (event.keyCode === 13 && this.state.commentBody.trim().length > 0) {
      let comment = { body: this.state.commentBody };
      CommentsAPI.create(comment, this.props.userid, this.props.post)
        .then(res => {
          this.props.fetchComments(this.props.post);
          this.setState({
            commentBody: '',
          })
        })
    }
  }


  render() {
    // console.log("comment box", this.props)
    return (
      <div className="CommentBox__root">
        <input
          className="CommentBox__input"
          type="text"
          placeholder="Add a comment..."
          value={this.state.commentBody}
          onChange={this.handleCommentChange}
          onKeyDown={this.handleCommentKeyDown}
          ref={(ref) => { this.commentInput = ref }}
        />
      </div>
    );
  }
}

export default CommentBox;
