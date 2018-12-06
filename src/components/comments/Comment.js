import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../../styles/CommentItem.css';


class Comment extends Component {
  render() {
    console.log("COMMENTprops", this.props)
    return (
      <div className="CommentItem__root">
        <strong><Link to={`/home/profile/${this.props.user._id}`} className="CommentItem__username">{this.props.user.username}</Link></strong>
        <p>{this.props.comment.body}</p>
        <p>{this.props.comment.dateCreated}</p>

      </div>
    )
  }
}

export default Comment;





















// renderBody() {
//   const words = this.props.body.split(/\s+/);
//   return (
//     <span>
//       {words.map((word, idx) => {
//         if (word.indexOf('#') === 0) {
//           return (
//             <Link
//               to={`/explore/tags/${word.substring(1)}`}
//               key={idx}
//               className="CommentItem__link">
//               {` ${word}`}
//             </Link>
//           );
//         } else if (word.indexOf('@') === 0) {
//           return (
//             <Link
//               to={`/${word.substring(1)}`}
//               key={idx}
//               className="CommentItem__link">
//               {` ${word}`}
//             </Link>
//           )
//         } else {
//           return ` ${word}`;
//         }
//       })}
//     </span>
//   )
// }

// render() {
//   // const { username } = this.props;
// //   return (
// //     <div className="CommentItem__root">
// //       <strong><Link to={`/${username}`} className="CommentItem__username">{username}</Link></strong> {this.renderBody()}
// //       {this.props.deletable === true
// //         ? (
// //           <span className="CommentItem__delete-button" onClick={this.openModal}>
// //             <i className="fa fa-times" />
// //           </span>
// //         )
// //         : null}
// //       {this.props.deletable === true
// //         ? (
// //           <ConfirmationModal
// //             isOpen={this.state.modalIsOpen}
// //             onRequestClose={this.closeModal}
// //             onConfirmClick={this.props.onDelete}
// //             confirmText="Delete Comment"
// //           />)
// //         : null}
// //     </div>
// //   );
// // }
// // }


