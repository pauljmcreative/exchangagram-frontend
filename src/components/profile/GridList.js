import React from 'react';
import Grid from './Grid';

const GridList = (props) => {
  const gridItems = props.posts
    .filter(post => post.user._id === props.userId)
    .map(post => <Grid key={post._id} post={post} user={props.user} />)
  return (
    <div className="PhotoGrid__root">
      <div className="PhotoGrid__grid-container Locations__photo-gallery">
        {gridItems}
      </div>
    </div>
  );

}

export default GridList;

