import React from 'react';
import Comment from './Comment';
import '../../styles/CommentItem.css';


const CommentsList = ({ comments }) => {
  // console.log('COMMENT LIST COMMENTS', comments)
  const commentItems = comments.map(comment => <Comment key={comment._id} comment={comment} user={comment.user} />)
  // console.log('commentLIST>>>', CommentsList)
  return (
    <div className="CommentList__root">
      {commentItems}
    </div>
  );

}


export default CommentsList;