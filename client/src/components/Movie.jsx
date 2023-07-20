import React from 'react';

var Movie = (props) => {
  if (props.movie.title === undefined) {
    return(
      <div>Sorry, no movies found using query</div>
    );
  }
  return(
    <div className='movie-tile'>
      <div className='movie-item'>
      <li>{props.movie.title}</li>
      </div>
      <button id='watch-toggle' type='button' onClick={(e) => (console.log('toggled!'))}>Watched</button>
    </div>
  );
}
export default Movie