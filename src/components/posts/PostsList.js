import React, { Component } from 'react'

class PostsList extends Component {
  render() {
    const postsList = posts.map(post => <Post />)
    // console.log('POSTLIST>>>', postsList)
    return (
      <div className="row align-items-end mx-auto">
        {postsList}
      </div>
    );
  };
}


export default PostsList;