import React from 'react';
import Grid from './Grid';
import '../../styles/PhotoGrid.css';


const GridList = (props) => {
  console.log('GL PRops', props.posts)
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

