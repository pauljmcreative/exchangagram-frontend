import React, { Component } from 'react';
import CommentBox from '../components/comments/CommentBox';
import CommentsList from '../components/comments/CommentsList';
import CommentsAPI from '../models/CommentsAPI';

class CommentsContainer extends Component {
  state = {
    comments: [],
  };

  // componentDidMount = () => {
  //   this.fetchComments(this.props.post);
  // }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchComments(this.props.post);
    }
  }

  fetchComments = (postId) => {
    CommentsAPI.show(postId)
      .then(res => {
        this.setState({
          comments: res.data,
        })
      })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h1>COMMENTS CONTAINER</h1>
        <CommentsList comments={this.state.comments} />
        <CommentBox post={this.props.post} fetchComments={this.fetchComments} userid={this.props.userid} />
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