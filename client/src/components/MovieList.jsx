import Movie from './Movie.jsx'
import React from 'react';

var MovieList = (props) => {
  if (props.movies.length === 0) {
    return (
      <div className='MovieList'>
        <ul>
          No Movie Data Currently
        </ul>
      </div>
    )
  }
  return (
    <div className='MovieList'>
      <ul>{props.movies.map((movie, index) => (
      <Movie movie={movie} key={index} watchList={props.watchList}></Movie>
  ))}</ul></div>);
}

export default MovieList;