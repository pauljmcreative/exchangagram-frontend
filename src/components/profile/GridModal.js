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










  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="GridModal"
        style={this.getCustomStyles()}
        ariaHideApp={false}>
        <div>GRID MODAL</div>
      </Modal>
    );
  }
}



export default GridModal;

