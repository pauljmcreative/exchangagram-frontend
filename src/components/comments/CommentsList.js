import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments, user }) => {
  console.log('COMMENT LIST COMMENTS', comments)
  const commentItems = comments.map(comment => <Comment key={comment._id} comment={comment} user={user} />)
  // console.log('commentLIST>>>', CommentsList)
  return (
    <div className="row align-items-end mx-auto">
      {commentItems}
    </div>
  );

}


export default CommentsList;