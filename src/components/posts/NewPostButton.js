import React, { Component } from 'react';
import '../../styles/NewPostButton.css';

class NewPostButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="NewPostButton__root">
        +
      </button>
    );
  }
}

export default NewPostButton
