import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  const commentItems = comments.map(comment => <Comment key={comment._id} comment={comment} />)
  // console.log('commentLIST>>>', CommentsList)
  return (
    <div className="row align-items-end mx-auto">
      {commentItems}
    </div>
  );

}


export default CommentsList;