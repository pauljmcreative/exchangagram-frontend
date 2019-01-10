import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImagesAPI from "../../models/ImagesAPI";
import LikeButton from "../LikeButton";
import CommentsContainer from "../../containers/CommentsContainer";
import "../../styles/Post.css";
import PostsAPI from "../../models/PostsAPI";
import AvatarsAPI from "../../models/AvatarsAPI";

class Post extends Component {
  state = {
    postImage: "",
    avatar: "",
    post: {}
  };

  componentDidMount = () => {
    let fetchPostById = () => {
      PostsAPI.show(this.props.post._id).then(res => {
        this.setState({
          post: res.data
        });
      });
    };

    let fetchImage = () => {
      ImagesAPI.image(this.props.post._id)
        // .then(res => {
        //   console.log(res.data)
        // })
        .then(res => {
          // console.log('FETCH IMAGE', res.data)
          if (res.data[0].imageName) {
            this.setState({
              postImage: `http://localhost:4000/uploads/${
                res.data[0].imageName
                }`
            });
          }
        });
    };

    let fetchAvatar = avatarId => {
      // console.log("POST FETCHING")
      AvatarsAPI.avatar(avatarId)
        .then(res => {
          // console.log("FETCH", res)
          this.setState({
            avatar: res.data.length
              ? "avatars/" + res.data[0].avatarName
              : "avatars/default-avatar.png"
          });
        })
        .catch(err => console.log("post avatar error", err));
    };

    if (this.props.post._id) {
      fetchImage();
      fetchPostById();
      fetchAvatar(this.props.post.user._id);

      //   Promise.all([

      //   ])
      //     .then(res => {
      //       console.log("completed all promises", res)
      //     })
      //     .catch(err => {
      //       console.warn("Error! Something went wrong in Posts.", err);
      //     })
    }
  };

  handleDelete = postId => {
    PostsAPI.delete(postId).then(res => {
      console.log("deleted!", res);
      this.props.fetchPosts();
    });
  };

  increaseLikes = () => {
    let likeCount = this.state.post.likes + 1;
    let increaseLikes = { likes: likeCount };
    PostsAPI.update(this.state.post._id, increaseLikes).then(res =>
      this.fetchPostById(this.state.post._id)
    );
  };

  decreaseLikes = () => {
    let decreaseCount = this.state.post.likes - 1;
    let decreaseLikes = { likes: decreaseCount };
    PostsAPI.update(this.state.post._id, decreaseLikes).then(res =>
      this.fetchPostById(this.state.post._id)
    );
  };

  render() {
    const { _id, username } = this.props.post.user;

    return (
      <article className="Post__root">
        <div className="Post-header">
          <div className="Post-header__avatar-container">
            {this.state.avatar ? (
              <img
                src={`http://localhost:4000/${this.state.avatar}`}
                className="Post-header__avatar-img"
                alt="Profile"
              />
            ) : null}
          </div>
          <div className="Post-header__metadata-container">
            <div className="Post-header__username">
              <Link to={`/home/profile/${_id}`}>{username}</Link>
            </div>
          </div>
          <div className="Post-header__timestamp">
            {this.props.user.user.id === this.props.post.user._id ? (
              <div className="Post__btn">
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(this.props.post._id)}
                >
                  <i className="fa fa-trash-o fa-2x" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="Post__body">
          {/* {this.state.postImage ? <img src={`http://localhost:4000/uploads/${this.state.postImage}`} alt="Post" /> : null} */}
          <img src={this.state.postImage} alt="Post" />
          <div>
            <span className="Post__likes-txt">
              Likes: {this.state.post.likes}
            </span>
            <span className="Post__btn like-hearts">
              <button className="btn btn-danger" onClick={this.increaseLikes}>
                <i className="fa fa-heart-o fa-2x LikeButton__icon" />
              </button>
              <button className="btn btn-danger" onClick={this.decreaseLikes}>
                <i className="fa fa-heart-o fa-2x fa-rotate-180 LikeButton__icon" />
              </button>
            </span>
          </div>
          <div className="Post__comments">{this.state.post.location}</div>
          <div className="Post__comments">{this.state.post.caption}</div>
        </div>
        <div className="Post__footer">
          <div className="Post__action-box">
            <div className="Post__like-button">
              <LikeButton />
            </div>
            <div className="Post__comment-box">
              <CommentsContainer
                post={this.state.post._id}
                user={this.props.user}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
