import React, { Component } from 'react';
import Modal from 'react-modal';
// import PostsAPI from '../../models/PostsAPI';
// import ImagesAPI from '../../models/ImagesAPI';

class GridModal extends Component {
  state = {

  }


  getCustomStyles() {
    return {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'initial',
        bottom: 'initial',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '0px',
        outline: 'none',
        padding: '0px',
        width: '65vw',
      }
    }
  }

  handleGridModalChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

  handleGridModalSubmit = (e) => {
    e.preventDefault();

  }


  // renderModalContent() {
  //   if (!this.props.post) {
  //     return null;
  //   } else {
  //     const { post } = this.props;
  //     return (
  //       <div className="PostModal__root">
  //         <div className="row">
  //           <div className="PostModal__photo-wrapper eight columns">
  //             <button onClick={this.props.onPrevClick} className="PostModal__prev-btn">
  //               <i className="fa fa-angle-left" />
  //             </button>
  //             <div className={post.filter} style={this.getFilterStyle()}>
  //               <img
  //                 src={getImageUrl(post.photoUrl)}
  //                 role="presentation"
  //                 className="PostModal__photo-image"
  //               />
  //             </div>
  //             <button onClick={this.props.onNextClick} className="PostModal__next-btn">
  //               <i className="fa fa-angle-right" />
  //             </button>
  //           </div>
  //           <div className="PostModal__info-container four columns">
  //             <div className="PostModal__user-info">
  //               <div className="PostModal__avatar-wrapper">
  //                 <img src={getAvatarUrl(post.user.avatarUrl)} alt={post.user.username} />
  //               </div>
  //               <div className="Profile__modal-user-username">
  //                 {post.user.username}
  //               </div>
  //               {this.renderFollowButton()}
  //             </div>

  //             <div className="PostModal__post-stats">
  //               <span>{post.likesCount} {pluralize(post.likesCount, 'like', 'likes')}</span>
  //             </div>

  //             <div className="PostModal__caption">
  //               <strong>{post.user.username}</strong> {post.caption}
  //             </div>

  //             <div className="PostModal__comments">
  //               {post.comments.slice(0, 4).map(comment => (
  //                 <div key={comment.id} className="PostModal__comment-item">
  //                   <strong>{comment.username}</strong> {comment.body}
  //                 </div>
  //               ))}
  //             </div>

  //             <div className="PostModal__action-box">
  //               <div className="PostModal__like-button">
  //                 <LikeButton
  //                   onLike={this.props.onLike}
  //                   onDislike={this.props.onDislike}
  //                   liked={this.props.liked}
  //                 />
  //               </div>
  //               <div className="PostModal__comment-box">
  //                 <CommentBox onSubmit={this.props.onCommentSubmit} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }







  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="GridModal"
        style={this.getCustomStyles()}>
        <div>GRID MODAL</div>
      </Modal>
    );
  }
}



export default GridModal;

