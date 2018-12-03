import React, { Component } from 'react';
import Profile from '../components/profile/Profile';
import GridList from '../components/profile/GridList';
import PostsAPI from '../models/PostsAPI';
import AvatarsAPI from '../models/AvatarsAPI';
import GridModal from '../components/profile/GridModal';


class ProfileContainer extends Component {
  state = {
    gridModalIsOpen: false,
    activeGridIndex: null,
    posts: [],
  }

  openModal = (index) => this.setState({
    gridModalIsOpen: true,
    activeGridIndex: index
  });
  closeModal = () => this.setState({
    gridModalIsOpen: false,
    activeGridIndex: null
  });

  PrevGridClick() {
    if (this.state.activeGridIndex === 0) {
      return false;
    }
    this.setState({
      activeGridIndex: this.state.activeGridIndex - 1,
    });
  }

  NextGridClick() {
    if (this.state.activeGridIndex === this.state.posts.length - 1) {
      return false;
    }
    this.setState({
      activeGridIndex: this.state.activeGridIndex + 1,
    });
  }




  componentDidMount = () => {
    this.fetchPosts();
  }

  fetchPosts = () => {
    PostsAPI.index()
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }

  renderGridModal() {
    const { activeGridIndex } = this.state;
    if (activeGridIndex === null) {
      return (
        <GridModal
          isOpen={this.state.gridModalIsOpen}
          closeModal={this.closeModal}
        />
      )
    }
    const activePost = this.props.posts[activeGridIndex];
    return (
      <GridModal
        isOpen={this.state.gridModalIsOpen}
        closeModal={this.closeModal}
        post={activePost}
        nextGridClick={this.nextGridClick}
        prevGridClick={this.prevGridClick}
      />
    );
  }

  render() {
    return (
      <div className="PhotoGrid__root">
        <Profile user={this.props.user} posts={this.state.posts} handleLogout={this.props.handleLogout} />
        <div className="PhotoGrid__grid-container Locations__photo-gallery">
          <GridList posts={this.state.posts} userId={this.props.match.params.user_id} />
        </div>
        {this.renderGridModal()}
      </div>
    );
  }
}


//   render() {
//     console.log('PROFILEcontainer>>', this.props)
//     let gridModal;
//     if (this.props.user.user) {
//       gridModal = (
//         <gridModal
//           posts={this.state.posts}
//           fetchPosts={this.fetchPosts}
//           userId={this.props.user.user.id}
//           isOpen={this.state.gridModalIsOpen}
//           closeModal={this.closeModal}
//           onRequestClose={this.closeModal}
//         />
//       )
//     }
//  

export default ProfileContainer;



