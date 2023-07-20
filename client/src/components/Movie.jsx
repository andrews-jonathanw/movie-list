import React from 'react';
const {useState} = React;

var CheckWatched = (movie, movies) => {
  if (movies === undefined) {
    return;
  }
  if (movie.watched) {
    movies.push(movie);
  } else {
    var index = movies.indexOf(movie);
    movies = movies.splice(index, 1);
  }
}

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
      <button id='watch-toggle' type='button' onClick={(e) => {
        props.movie.watched = !props.movie.watched
        if (props.movie.watched === true) {
          e.currentTarget.innerText = 'Watched';
        } else {
          e.currentTarget.innerText = 'Not Watched';
        }
        CheckWatched(props.movie, props.watchList);}}>{props.movie.watched ? 'Watched' : 'Not Watched'}</button>
    </div>
  );
}
export default Movie