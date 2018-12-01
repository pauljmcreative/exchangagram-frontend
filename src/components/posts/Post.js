import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImagesAPI from '../../models/ImagesAPI';
import LikeButton from '../LikeButton';
import CommentBox from '../comments/CommentBox';
import '../../styles/Post.css';


// for each individual post
//component did mount axios call
//retrieve image model whos post id match current post id

//src="localhost:4000/images/" + this.state.imageName


class Post extends Component {
  state = {
    postImage: '',
  }

  componentDidMount = () => {
    if (this.props.post._id) {
      this.fetchImage(this.props.post._id);
    }
  }

  fetchImage = (postId) => {
    ImagesAPI.image(postId)
      .then(res => {
        this.setState({
          postImage: res.data[0].imageName
        })
      })
  }



  render() {
    // console.log('POSTstate>,', this.state);
    // console.log("POST PROPS>", this.props.post._id)
    // console.log('singlePOSTuser:', this.props.post.user.username)
    // console.log('singlePOSTpost:', this.props.posts.data)
    const user = this.props.post.user;
    // console.log(username)
    return (
      <article className="Post__root">
        <div className="Post-header">
          <div className="Post-header__avatar-container">
            <img
              src="#"
              className="Post-header__avatar-img"
              alt="profile"
            />
          </div>
          <div className="Post-header__metadata-container">
            <div className="Post-header__username">
              <Link to={`/home/profile/${user._id}`}>{user.username}</Link>
            </div>
          </div>
          <div className="Post-header__timestamp">
          </div>
        </div>
        <div className='Post__body'>
          <img src={`http://localhost:4000/image/${this.state.postImage}`} />
        </div>
        <div className="Post__footer">
          <div className="Post__action-box">
            <div className="Post__like-button">
              <LikeButton />
            </div>
            <div className="Post__comment-box">
              <CommentBox />
            </div>
          </div>
        </div>
      </article>
    )
  }
}


export default Post;
