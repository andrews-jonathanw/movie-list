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
  const [showInfo, setShowInfo] = useState(false);
  var onClick = () => {
    console.log('you touched my info');
    setShowInfo(!showInfo);
  }

  if (props.movie.title === undefined) {
    return(
      <div>Sorry, no movies found using query</div>
    );
  }

  var movieInfo = Object.entries(props.movie);
  movieInfo = movieInfo.slice(2);

  var infoList = () => {
    if (showInfo) {
      return (
      <ul>
        {movieInfo.map((pair, index) => (
          <li className='info-item' key={index}>{pair[0]}: {pair[1]}</li>
        ))}
      </ul>
      )
      return (<></>)
    }
  }

  return(
    <div className='movie-tile'>
      <div className='movie-item' onClick={(e) => onClick()}>
      <li>{props.movie.title}</li>
      <div className='movie-info'>{infoList()}</div>
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