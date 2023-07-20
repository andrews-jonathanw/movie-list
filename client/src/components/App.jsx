import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
const {useState} = React;

const App = (props) => {
  /************* STATES ************/
  // all movies (just holds the data)
  const [movies, setMovies] = useState([]);
  // filtered movie list (this is what we view and mutate)
  const [moviesFiltered, setFilteredMovies] = useState([]);
  // search query
  const [query, setQuery] = useState('');
  // add movie input
  const [addInput, setAddInput] = useState('');
  // watched movies
  const [watched, setWatched] = useState([]);
  // to be watched movies
  const [toWatch, setToWatched] = useState([]);
  /**********************************/

  /******** Handles Inputs **********/
  function handleInputChange (e) {
    // use event id to choose which if case we enter
    if(e.target.id === 'movie-search') {
      setQuery(e.target.value);
    } else if(e.target.id === 'movie-add') {
      setAddInput(e.target.value);
    }
  }
  /**********************************/

  /******** Handles Clicks **********/
  function handleClick (e) {
    // use event id to choose which if case we enter
    if (e.id === 'search-button') {
      if (e.innerText === 'Search') {
        e.innerText = 'Back';
      } else {
        e.innerText = 'Search';
      }
      handleSearch(query);
    } else if(e.id === 'add-button') {
      handleAdd(addInput);
    }
  }
  /**********************************/

  /******** Handles Search **********/
  function handleSearch () {
    // if query is empty show all movies
    if (query === undefined) {
      setFilteredMovies(movies);
      return;
    }
    // create filtered array
    var filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    // if filtered array is not empty
    if (filtered.length > 0) {
      // set state of filtered to the filtered array
      setFilteredMovies(filtered);
      // reset search bar state
      setQuery('');
    } else {
      // filtered is empty so no movie contains that query string
      setFilteredMovies(['no movies found']);
      // reset search bar state
      setQuery('');
    }
  }
  /**********************************/

  /***** Handles Adding Movie *******/
  function handleAdd () {
    if (addInput === '') {
      return;
    }
    // push new title into movies array
    movies.push({title: addInput, watched: false, year: 1834, runtime: 632, rottenTomato: '69%', director: 'Adam Sandler'});
    // set both states of movies and the filtered movies
    // movies contains all movies and filtered shows only the movies we wont to be shown
    // movies only ever grows in size, filtered gets reset after each search
    setMovies(movies);
    setFilteredMovies(movies);
    // reset add input state
    setAddInput('');
  }
  /**********************************/

  /***** Handles Watched *******/
  function handleWatched (e) {
    // console.log('e from handleWatched', e);
    // filters movie data for watched movies
    var watchFilter = movies.filter(movie => movie.watched);
    //console.log(watchFilter);
    if (watchFilter.length > 0) {
      setWatched(watchFilter);
      setFilteredMovies(watched);
    } else {
      setWatched([]);
      setFilteredMovies(watched);
    }
    console.log(moviesFiltered);
  }
  /**********************************/

  /***** Handles To-Watch *******/
  function handleToWatched () {
    //console.log('movies when towatch clicky', movies);
    var toWatchFilter = movies.filter(movie => (!movie.watched));
    //console.log('movies when to-watchy', toWatchFilter);
    if (toWatchFilter.length > 0) {
      setFilteredMovies(toWatchFilter);
    } else {
      setFilteredMovies(toWatchFilter);
    }
    console.log(moviesFiltered);
  }
  /**********************************/

  /********** App Render ************/
  return (
    <div>
      <AddMovie movies={movies} value={addInput} change={handleInputChange} clickFn={handleClick}/>
      <Search value={query} change={handleInputChange} clickFn={handleClick}/>
      <button type='button' id='watched' onClick={(e) => (handleWatched())}>Watched</button>
      <button type='button' id='to-watch' onClick={(e) => (handleToWatched())}>To-Watch</button>
      <MovieList movies={moviesFiltered} watchList={watched} toWatch={toWatch}/>
    </div>
  )
};
export default App;