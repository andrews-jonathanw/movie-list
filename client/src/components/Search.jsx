import React from 'react';
import Movie from './Movie.jsx'
import MovieList from './MovieList.jsx'


var Search = (props) => {
  //console.log('is search working?')
  return (
    <form className='search-form form-inline'>
      <input
        type='text'
        value={props.value}
        id='movie-search'
        placeholder='Search for a movie'
        onChange={props.change}
      />
      <button id='search-button' type='button' onClick={(e) => props.clickFn(e.target, props.value)}>Search</button>
    </form>
  );
};

export default Search;