import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const imageMaxSize = 2000000 //bytes

class PictureDropzone extends Component {
  state = {
    files: [],
  }

  handleOnDrop = (files, rejectedFiles) => {
    console.log(files)
    console.log('Rejected files are ', rejectedFiles)
    if (rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectFile = rejectedFiles[0]
      const currentRejectFileType = currentRejectFile.type
      const currentRejectFileSize = currentRejectFile.size
      if (currentRejectFileSize > imageMaxSize) {
        alert('This file is too big')
      }
    }

    else if (files && files.length > 0) {
      const currentFile = files[0]
      const currentFileType = currentFile.type
      const currentFileSize = currentFile.size
      if (currentFileSize > imageMaxSize) {
        alert('This file is too big')
      }
    } else {
      this.setState({
        files: this.state.files.concat(files),
      });
    }
  }


  render() {
    return (
      <Dropzone
        className="NewPostBoard__dropzone"
        onDrop={this.handleOnDrop}
        maxSize={imageMaxSize}
        multiple={false}
        accept="image/*"
      >
        <div className="NewPostBoard__dropzone-inner-wrapper">
          <div className="NewPostBoard__dropzone-inner-content">
            <div>
              <i className="fa fa-camera NewPostBoard__dropzone-icon" aria-hidden="true" />
            </div>
            <div className="NewPostBoard__dropzone-text">Upload Picture</div>
          </div>
        </div>
      </Dropzone>
    )
  }
}

export default PictureDropzone;

