import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAvatarUrl, getImageUrl } from '../../utils/helpers';
import moment from 'moment';
import LikeButton from './LikeButton';
import CommentBox from './CommentBox';
import { getFilterStyle } from '../config/filters';
import '../../styles/Post.css';


state = {
  showHeartAnimation: false,
};
}

componentWillReceiveProps(nextProps) {
  if (!nextProps.liked) {
    this.setState({ showHeartAnimation: false })
  }
}

onImageDoubleClick = (event) => {
  event.preventDefault();
  if (!this.props.liked) {
    this.props.onLike()
      .then(() => this.setState({ showHeartAnimation: true }));
  }
}

getFilterStyle = () => {
  if (this.props.filterStyle === '') {
    return {}
  }

  return getFilterStyle(JSON.parse(this.props.filterStyle));
}

renderLikes() {
  const { likesCount } = this.props;
  if (likesCount > 0) {
    return (
      <div className="Post__likes" onClick={this.props.onLikersClick}>
        {likesCount} {likesCount === 1 ? 'like' : 'likes'}
      </div>
    );
  }
}

renderCaption() {
  const { caption, user: { username } } = this.props;
  if (caption) {
    return (
      <CommentItem username={username} body={caption} />
    )
  }
}

renderViewMoreComments() {
  const { nextPage, currentPage } = this.props.commentPagination;
  if (nextPage !== null) {
    return (
      <div
        className="Post__fetch-comments-link"
        onClick={this.props.onFetchMoreComments}>
        {currentPage === 1
          ? `View all ${this.props.commentsCount} comments`
          : 'View more comments'}
      </div>
    );
  }
}

renderComments() {
  return (
    <div className="Post__comments">
      {this.props.comments.map(comment => (
        <CommentItem
          key={comment.id}
          username={comment.username}
          body={comment.body}
          deletable={this.props.currentUser.username === comment.username}
          onDelete={() => this.props.onCommentDelete(comment.id)}
        />
      ))}
    </div>
  );
}

renderHeartAnimation() {
  if (this.state.showHeartAnimation) {
    return (
      <i className="fa fa-heart Post__heart-animation-icon" />
    );
  }
}


class Post extends Component {
  render() {
    return (
      <article className="Post__root">
        <div className="Post-header">
          <div className="Post-header__avatar-container">
            <img
              src={getAvatarUrl(avatarUrl)}
              className="Post-header__avatar-img"
              alt="profile"
            />
          </div>
          <div className="Post-header__metadata-container">
            <div className="Post-header__username">
              <Link to="#">username</Link>
            </div>
            {address ?
              (<div className="Post-header__address">
                <Link to={`/explore/locations/${placeId}`}>{address}</Link>
              </div>) : null}
          </div>
          <div className="Post-header__timestamp">
            {moment(createdAt).fromNow()}
          </div>

        </div>
        <div
          onDoubleClick={this.onImageDoubleClick}
          className={`Post__body ${filter || ''}`}
          style={this.getFilterStyle()}>
          <img src={getImageUrl(photoUrl)} role="presentation" />
          {this.renderHeartAnimation()}
        </div>
        <div className="Post__footer">
          {this.renderLikes()}

          {this.renderCaption()}
          {this.renderViewMoreComments()}
          {this.renderComments()}
          <div className="Post__action-box">
            <div className="Post__like-button">
              <LikeButton
                onLike={this.props.onLike}
                onDislike={this.props.onDislike}
                liked={this.props.liked}
              />
            </div>
            <div className="Post__comment-box">
              <CommentBox onSubmit={this.props.onCommentSubmit} />
            </div>
          </div>
        </div>
      </article>
    )
  }
}


export default Post;







// class Post extends React.Component {
//   state = {
//     showHeartAnimation: false,
//   };

//     this.onImageDoubleClick = this._onImageDoubleClick.bind(this);
//     this.getFilterStyle = this._getFilterStyle.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     if (!nextProps.liked) {
//       this.setState({ showHeartAnimation: false })
//     }
//   }

//   _onImageDoubleClick(event) {
//     event.preventDefault();
//     if (!this.props.liked) {
//       this.props.onLike()
//         .then(() => this.setState({ showHeartAnimation: true }));
//     }
//   }

//   _getFilterStyle() {
//     if (this.props.filterStyle === '') {
//       return {}
//     }

//     return getFilterStyle(JSON.parse(this.props.filterStyle));
//   }

//   renderLikes() {
//     const { likesCount } = this.props;
//     if (likesCount > 0) {
//       return (
//         <div className="Post__likes" onClick={this.props.onLikersClick}>
//           {likesCount} {likesCount === 1 ? 'like' : 'likes'}
//         </div>
//       );
//     }
//   }

//   renderCaption() {
//     const { caption, user: { username } } = this.props;
//     if (caption) {
//       return (
//         <CommentItem username={username} body={caption} />
//       )
//     }
//   }

//   renderViewMoreComments() {
//     const { nextPage, currentPage } = this.props.commentPagination;
//     if (nextPage !== null) {
//       return (
//         <div
//           className="Post__fetch-comments-link"
//           onClick={this.props.onFetchMoreComments}>
//           {currentPage === 1
//             ? `View all ${this.props.commentsCount} comments`
//             : 'View more comments'}
//         </div>
//       );
//     }
//   }

//   renderComments() {
//     return (
//       <div className="Post__comments">
//         {this.props.comments.map(comment => (
//           <CommentItem
//             key={comment.id}
//             username={comment.username}
//             body={comment.body}
//             deletable={this.props.currentUser.username === comment.username}
//             onDelete={() => this.props.onCommentDelete(comment.id)}
//           />
//         ))}
//       </div>
//     );
//   }

//   renderHeartAnimation() {
//     if (this.state.showHeartAnimation) {
//       return (
//         <i className="fa fa-heart Post__heart-animation-icon" />
//       );
//     }
//   }

//   render() {
//     const {
//       photoUrl,
//       createdAt,
//       filter,
//       address,
//       placeId,
//       user: {
//         username,
//         avatarUrl
//       }
//     } = this.props;

//     return (
//       <article className="Post__root">
//         <div className="Post-header">
//           <div className="Post-header__avatar-container">
//             <img
//               src={getAvatarUrl(avatarUrl)}
//               className="Post-header__avatar-img"
//               alt="profile"
//             />
//           </div>
//           <div className="Post-header__metadata-container">
//             <div className="Post-header__username">
//               <Link to="#">username</Link>
//             </div>
//             {address ?
//               (<div className="Post-header__address">
//                 <Link to={`/explore/locations/${placeId}`}>{address}</Link>
//               </div>) : null}
//           </div>
//           <div className="Post-header__timestamp">
//             {moment(createdAt).fromNow()}
//           </div>

//         </div>
//         <div
//           onDoubleClick={this.onImageDoubleClick}
//           className={`Post__body ${filter || ''}`}
//           style={this.getFilterStyle()}>
//           <img src={getImageUrl(photoUrl)} role="presentation" />
//           {this.renderHeartAnimation()}
//         </div>
//         <div className="Post__footer">
//           {this.renderLikes()}

//           {this.renderCaption()}
//           {this.renderViewMoreComments()}
//           {this.renderComments()}
//           <div className="Post__action-box">
//             <div className="Post__like-button">
//               <LikeButton
//                 onLike={this.props.onLike}
//                 onDislike={this.props.onDislike}
//                 liked={this.props.liked}
//               />
//             </div>
//             <div className="Post__comment-box">
//               <CommentBox onSubmit={this.props.onCommentSubmit} />
//             </div>
//           </div>
//         </div>
//       </article>
//     );
//   }
// }

// export default Post;