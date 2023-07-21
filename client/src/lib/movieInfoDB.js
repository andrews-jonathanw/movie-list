import { API_KEY, MOVIEDB_API_KEY } from '/client/config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchMovieDb = (query, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.themoviedb.org',
    data: {
      q: query,
    },
    datatype: 'json',
    success: function (data) {
      console.log('GET SUCCESS!', data)
      //callback(data);
    },
    error: function (data) {
      console.log('error!');
    }
  });
};

export default searchMovieDb;