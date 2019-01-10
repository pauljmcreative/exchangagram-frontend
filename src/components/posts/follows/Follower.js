import React, { Component } from "react";
import { Link } from "react-router-dom";
import AvatarsAPI from "../../models/AvatarsAPI";

class Follower extends Component {
  state = {
    avatar: "",
    user: {},
    allFollowers: {}
  };

  componentDidMount = () => {
    if (this.props.user._id) {
      this.fetchAvatar(this.props.user._id);
      this.fetchUserById(this.props.user._id);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchAvatar(this.props.user._id);
      this.fetchUserById(this.props.user._id);
    }
  };

  fetchUserById = userId => {
    UsersAPI.show(userId).then(res => {
      this.setState({
        user: res.data
      });
    });
  };

  fetchAvatar = avatarId => {
    AvatarsAPI.avatar(avatarId).then(res => {
      this.setState({
        avatar: res.data[0].avatarName
      });
    });
  };

  render() {
    return (
      <div className="Post-header">
        <div className="Post-header__avatar-container">
          {this.state.avatar ? (
            <img
              src={`https://exchangagram-backend.herokuapp.com/avatars/${this.state.avatar}`}
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
      </div>
    );
  }
}

export default Follower;
