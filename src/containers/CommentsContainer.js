import React, { Component } from "react";
import CommentBox from "../components/comments/CommentBox";
import CommentsList from "../components/comments/CommentsList";
import CommentsAPI from "../models/CommentsAPI";

class CommentsContainer extends Component {
  state = {
    comments: []
  };

  // componentDidMount = () => {
  //   this.fetchComments(this.props.post);
  // }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.post !== this.props.post) {
      this.fetchComments(this.props.post);
    }
  };

  fetchComments = postId => {
    CommentsAPI.show(postId).then(res => {
      // console.log('CC FETCH RES ', res)
      this.setState({
        comments: res.data
      });
      console.log("HERE IS POST Comments", this.state.comments);
    });
  };

  render() {
    // console.log("CCprops", this.props.user.user.id)
    // console.log("CC STATE", this.state)

    // const commentBox = this.state.comments.length > 0
    //   ? <CommentBox post={this.props.post} fetchComments={this.fetchComments} userid={this.state.comments[0].user._id} />
    //   : null;

    return (
      <div>
        <CommentsList comments={this.state.comments} user={this.props.user} />
        <CommentBox
          post={this.props.post}
          fetchComments={this.fetchComments}
          userid={this.props.user.user.id}
        />
      </div>
    );
  }
}

export default CommentsContainer;
