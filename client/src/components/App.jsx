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
  /**********************************/

  /******** Handles Inputs **********/
  function handleInputChange (e) {
    console.log('input changing!');
    console.log(e.target.id);
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
    console.log(e);
    console.log('handleClick invoked!');
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
    console.log('handleSearch invoked!');
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
    movies.push({title: addInput});
    console.log(movies);
    // set both states of movies and the filtered movies
    // movies contains all movies and filtered shows only the movies we wont to be shown
    // movies only ever grows in size, filtered gets reset after each search
    setMovies(movies);
    setFilteredMovies(movies);
    // reset add input state
    setAddInput('');
  }
  /**********************************/

  /********** App Render ************/
  return (
    <div>
      <AddMovie movies={movies} value={addInput} change={handleInputChange} clickFn={handleClick}/>
      <Search value={query} change={handleInputChange} clickFn={handleClick}/>
      <MovieList movies={moviesFiltered} />
    </div>
  )
};
export default App;