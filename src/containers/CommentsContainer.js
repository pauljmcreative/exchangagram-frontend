import React, { Component } from 'react';
import CommentsList from '../components/comments/CommentsList';

class CommentsContainer extends Component {
  state = {
    comments: [],
  };

  setComments = (commentData) => {
    this.setState({
      comments: commentData,
    });
  }


  render() {
    return (
      <div>
        <h1>COMMENTS CONTAINER</h1>
        <CommentsList setComments={this.setComments} />
      </div>
    )
  }
}


export default CommentsContainer;




// renderComments() {
//   return (
//     <div className="Post__comments">
//       {this.props.comments.map(comment => (
//         <CommentItem
//           key={comment.id}
//           username={comment.username}
//           body={comment.body}
//           deletable={this.props.currentUser.username === comment.username}
//           onDelete={() => this.props.onCommentDelete(comment.id)}
//         />
//       ))}
//     </div>
//   );
// }