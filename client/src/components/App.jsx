import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
const {useState, useEffect} = React;

const App = (props) => {
  // state

  // var movieData = [
  //   {title: 'Mean Girls'},
  //   {title: 'Hackers'},
  //   {title: 'The Grey'},
  //   {title: 'Sunshine'},
  //   {title: 'Ex Machina'},
  // ];
  const [movies, setMovies] = useState([]);

  // add fn is adding movies correctly. When we search movies (click Go!) or our movies array is
  // being re-rendered (re-rendering our entire App component). How do we keep track of the
  // movie list state variable between re-renders after setState runs?

  // helper fn for filtering movies
  function movieFilter (query) {
    console.log(movies);
    var filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    // if (filtered.length <= 0) {
    //   filtered.push({title: 'No movie found!'});
    // }
    //console.log(filtered);
    return filtered;
  }
  const [query, setQuery] = useState('');
  function handleChange (e) {
    //console.log(e.target.value);
    setQuery(e.target.value);
  }

  function handleClick (e) {
    // invoke helper function
    console.log('before setMovies: ', movies);
    // var filteredMovies = movieFilter(query);
    setMovies(movieFilter(query));
    console.log('after setMovies: ', movies);
    setQuery('');
  }
  /* ADD MOVIE*/

  // state for add movie input
  const [addInput, setAddInput] = useState('');
  // add text change
  function handleAddChange (e) {
    setAddInput(e.target.value);
    console.log(addInput);
  }

  // handle click
  function handleAddClick (e) {
    movies.push({title: addInput});
    setMovies(movies);
    setAddInput('');
    //console.log(movies);
  }

  return (
    <div>
      <AddMovie movies={movies} value={addInput} change={handleAddChange} clickFn={handleAddClick}/>
      <Search value={query} change={handleChange} clickFn={handleClick}/>
      <MovieList movies={movies} />
    </div>
  )
};
export default App;