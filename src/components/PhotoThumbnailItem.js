import React from 'react';
import '../styles/PhotoThumbnailItem.css';

class PhotoThumbnailItem extends Component {


  render() {
    return (
      <div className="PhotoThumbnailItem__root" onClick={this.props.onClick}>
        <div
          style={this.getStyleObject()}
          className={`Profile__photo-image ${this.props.filter}`}
        />
        <div className="PhotoThumbnailItem__overlay">
          <div className="PhotoThumbnailItem__overlay-icons">
            <div className="PhotoThumbnailItem__likes-count">
              <i className="fa fa-heart" /> <span className="PhotoThumbnailItem__count">{this.props.likesCount}</span>
            </div>
            <div className="PhotoThumbnailItem__comments-count">
              <i className="fa fa-comment" /> <span className="PhotoThumbnailItem__count">{this.props.commentsCount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PhotoThumbnailItem;