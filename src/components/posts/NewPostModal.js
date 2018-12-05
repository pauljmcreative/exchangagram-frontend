import React, { Component } from 'react';
import Modal from 'react-modal';
// import PictureDropzone from '../PictureDropzone';
import PostsAPI from '../../models/PostsAPI';
import ImagesAPI from '../../models/ImagesAPI';
import '../../styles/NewPostModal.css';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.8)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    right: 'initial',
    bottom: 'initial',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '30px'

  }
}

class NewPostModal extends Component {
  state = {
    location: '',
    caption: '',
  }

  handlePostChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePostSubmit = (e) => {
    e.preventDefault();
    const postData = {
      location: this.state.location,
      caption: this.state.caption,
    }

    const imageData = new FormData(document.querySelector('#image-upload'));

    console.log('USERID', this.props.userId)
    PostsAPI.create(postData, this.props.userId)
      .then(postres => {
        console.log('post res:', postres)
        // debugger;
        ImagesAPI.create(imageData, postres.data._id)
          .then(imageres => {
            console.log('imageRes:', imageres)
            this.props.closeModal();
            this.props.fetchPosts();
          })
          .catch(err => console.log("Something went wrong: ", err))
      })
  }

  render() {
    // console.log('POST MODAL USERID', this.props.userId)
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="NewPostModal"
        style={customStyles}
        ariaHideApp={false}>


        <form className="PostForm__root">
          <fieldset>
            <input
              className="NewPostModal__input"
              onChange={this.handlePostChange}
              name="location"
              type="text"
              placeholder="Location"
              className="PostForm__input"
            />
          </fieldset>
          <fieldset>
            <input
              className="NewPostModal__input"
              onChange={this.handlePostChange}
              name="caption"
              type="text"
              placeholder="Caption"
              className="PostForm__input"
            />
          </fieldset>
        </form>
        <form id="image-upload" encType="multipart/form-data">
          <fieldset>
            <div>
              <span>Image File</span>
              <input className="NewPostModal__fileButton" name="myImage" type="file" />
            </div>
          </fieldset>
        </form>
        <button
          onClick={this.handlePostSubmit}
          className="NewPostModal__button"
          type="submit">
          Submit
        </button>

      </Modal >
    );
  }
}



export default NewPostModal;

