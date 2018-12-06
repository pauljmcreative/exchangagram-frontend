import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImagesAPI from '../../models/ImagesAPI';
import LikeButton from '../LikeButton';
import CommentsContainer from '../../containers/CommentsContainer';
import '../../styles/Post.css';
import PostsAPI from '../../models/PostsAPI';
import AvatarsAPI from '../../models/AvatarsAPI';


class Post extends Component {
  state = {
    postImage: '',
    avatar: '',
    post: {},
  }

  componentDidMount = () => {
    if (this.props.post._id) {
      Promise.all([
        this.fetchImage(this.props.post._id),
        this.fetchPostById(this.props.post._id),
        this.fetchAvatar(this.props.user.user.id)
      ])
        .then(res => {
          console.log("completed all promises", res)
        })
        .catch(err => {
          console.warn("Error! Something went wrong.", err);
        })
    }
  }


  fetchPostById = (postId) => {
    PostsAPI.show(postId)
      .then(res => {
        this.setState({
          post: res.data,
        })
      })
  }

  fetchImage = (postId) => {
    ImagesAPI.image(postId)
      // .then(res => {
      //   console.log(res.data)
      // })
      .then(res => {
        console.log('FETCH IMAGE', res.data)
        if (res.data[0].imageName) {
          this.setState({
            postImage: res.data[0].imageName
          })
        }
      })
  }

  fetchAvatar = (avatarId) => {
    console.log("POST FETCHING")
    AvatarsAPI.avatar(avatarId)
      .then(res => {
        console.log("FETCH", res)
        this.setState({
          avatar: res.data[0].avatarName
        })
      })
  }

  handleDelete = (postId) => {
    PostsAPI.delete(postId)
      .then(res => {
        console.log("deleted!", res)
        this.props.fetchPosts();
      })
  }

  increaseLikes = () => {
    let likeCount = this.state.post.likes + 1;
    let increaseLikes = { likes: likeCount };
    PostsAPI.update(this.state.post._id, increaseLikes)
      .then(res => this.fetchPostById(this.state.post._id));
  }

  decreaseLikes = () => {
    let decreaseCount = this.state.post.likes - 1;
    let decreaseLikes = { likes: decreaseCount };
    PostsAPI.update(this.state.post._id, decreaseLikes)
      .then(res => this.fetchPostById(this.state.post._id));
  }



  render() {
    console.log('POSTstate>,', this.props);
    // console.log("POST PROPS>", this.props.post.user)
    // console.log('singlePOSTuser:', this.props.post.user.username)
    // console.log('singlePOSTpost:', this.props.posts.data)

    const { _id, username } = this.props.post.user;


    return (
      <article className="Post__root">
        <div className="Post-header">
          <div className="Post-header__avatar-container">
            {this.state.avatar ? <img
              src={`http://localhost:4000/avatars/${this.state.avatar}`}
              className="Post-header__avatar-img"
              alt="Profile"
            /> : null}
          </div>
          <div className="Post-header__metadata-container">
            <div className="Post-header__username">
              <Link to={`/home/profile/${_id}`}>{username}</Link>
            </div>
          </div>
          <div className="Post-header__timestamp">
          </div>
        </div>
        <div className='Post__body'>
          {/* {this.state.postImage ? <img src={`http://localhost:4000/uploads/${this.state.postImage}`} alt="Post" /> : null} */}
          <img src={`http://localhost:4000/uploads/${this.state.postImage}`} alt="Post" />
          <div>{this.state.post.location}</div>
          <div>{this.state.post.caption}</div>
        </div>
        <div className="Post__footer">
          <div>Likes: {this.state.post.likes}</div>
          <div className="Post__action-box">
            <div className="Post__like-button">
              <LikeButton />
              <button
                onClick={this.increaseLikes}>
                <i className="fa fa-heart-o LikeButton__icon" />
              </button>
              <button
                onClick={this.decreaseLikes}>
                <i className="fa fa-heart-o LikeButton__icon" />
              </button>
            </div>
            <div className="Post__action-box">
              {this.props.user.user.id === this.props.post.user._id
                ? <button onClick={() => this.handleDelete(this.props.post._id)}>Delete</button>
                : null}
            </div>
            <div className="Post__comment-box">
              <CommentsContainer post={this.state.post._id} user={this.props.user} />
            </div>

          </div>
        </div>
      </article>
    )
  }
}


export default Post;




// user_id === post.user.id </delete>
// render (
//   <delete button>
// )
