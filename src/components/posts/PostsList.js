import React from 'react';
import Post from './Post';

const PostsList = (props) => {
  console.log('POST LIST ', props.user)
  const postItems = props.posts.map(post => <Post key={post._id} {...props} post={post} user={props.user} fetchPosts={props.fetchPosts} />)
  return (
    <div className="row align-items-end mx-auto">
      {postItems}
    </div>
  );

}

export default PostsList;

