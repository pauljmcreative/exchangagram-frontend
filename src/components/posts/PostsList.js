import React from 'react';
import Post from './Post';

const PostsList = (props) => {
  // console.log('POSTlist>>', user);
  console.log('POSTLIST POSTS>>>', props.posts)
  const postItems = props.posts.map(post => <Post key={post._id} post={post} user={props.user} />)
  return (
    <div className="row align-items-end mx-auto">
      {postItems}
      {/* <Post posts={props.posts} user={props.user} /> */}
    </div>
  );

}

export default PostsList;

