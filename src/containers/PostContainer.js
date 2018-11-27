import React, { Component } from 'react';


class PostContainer extends Component {
  state = {
    posts: [],
  }

  componentDidMount = async () => {
    let response = await fetch('http://localhost:4000/api/posts');
    let json = await response.json();
    this.setState({
      posts: json
    })
  }



  render() {
    console.log(this.state);
    return (
      <div>
        <h1>POST CONTAINER</h1>
      </div>
    );
  }
}

export default PostContainer;
