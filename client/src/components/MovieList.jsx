import Movie from './Movie.jsx'
import React from 'react';
var MovieList = (props) => {
  if (props.movies.length === 0) {
    return (
      <div className='MovieList'>
        <ul>
        No Movie Data
        </ul>
      </div>
    )
  }
  return (
    <div className='MovieList'>
      <ul>{props.movies.map((movie) => (
      <Movie movie={movie} key={movie.title}></Movie>
  ))}</ul></div>);
}

export default MovieList;