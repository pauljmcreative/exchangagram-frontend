import React, { Component } from 'react';
import Modal from 'react-modal';
import PostsAPI from '../../models/PostsAPI';
import ImagesAPI from '../../models/ImagesAPI';

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

class GridModal extends Component {

  handlePostChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

  handlePostSubmit = (e) => {
    e.preventDefault();

  }




  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="GridModal"
        style={customStyles}>
        <div>GRID MODAL</div>
      </Modal>
    );
  }
}



export default GridModal;

