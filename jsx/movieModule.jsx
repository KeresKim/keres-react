const { handleActions } = require('redux-actions')

const keres_MOVIES = 'keres_MOVIES'
const keres_MOVIE = 'keres_MOVIE'

module.exports = {
  fetchMoviesActionCreator: (movies) => ({
    type: keres_MOVIES,
    movies
  }),
  fetchMovieActionCreator: (index) => ({
    type: keres_MOVIE,
    index
  }),
  reducer: handleActions({
    [keres_MOVIES]: (state, action) => ({
      ...state,
      all: action.movies
    }),
    [keres_MOVIE]: (state, action) => ({
      ...state,
      current: state.all[action.index - 1]
    })
  }, {
    movies: [],
    movie: {}
  })
}