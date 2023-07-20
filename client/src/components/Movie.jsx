import React from 'react';
const {useState} = React;

var CheckWatched = (movie, movies) => {
  if (movies === undefined) {
    movies = [];
  }
  if (movie.watched) {
    movies.push(movie);
    console.log('movie: ', movie, 'was pushed!', movies)
  } else {
    var index = movies.indexOf(movie);
    movies = movies.splice(index, 1);
    console.log('movie: ', movie, 'was removed!', movies);
  }
  return movies;
}

var Movie = (props) => {
  const [isWatched, setWatched] = useState(false);
  const style = {
    backgroundColor: isWatched ? 'green' : 'white'
  };
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
      <button id='watch-toggle' type='button' style={style} onClick={(e) => {
        props.movie.watched = !props.movie.watched
        CheckWatched(props.movie, props.watchList)
        setWatched(!isWatched)}}>Watched</button>
      {console.log(props.movie)}
    </div>
  );
}
export default Movie