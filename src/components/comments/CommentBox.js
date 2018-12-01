import React, { Component } from 'react';
import '../../styles/CommentBox.css';

class CommentBox extends Component {
  state = {
    commentBody: '',
  };

  handleCommentChange = (e) => {
    console.log('comment event:', e);
    this.setState({ commentBody: e.target.value });
  }


  handleCommentKeyDown = (event) => {
    console.log('Comment submitted!!!!');
    if (event.which === 13 && this.state.commentBody.trim().length > 0) {
      this.props.onKeyDown(this.state.commentBody);
      this.setState({ commentBody: '' });
      this.commentInput.blur();
    }
  }

  render() {
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
