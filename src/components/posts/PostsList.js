import React from 'react';
import Post from './Post';

const PostsList = (props) => {
  const postItems = props.posts.map(post => <Post key={post._id} post={post} user={props.user} />)
  return (
    <div className="row align-items-end mx-auto">
      {postItems}
    </div>
  );

}

export default PostsList;

