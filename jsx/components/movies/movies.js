const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const movies = require('../../../data/movies.json')
const {
  fetchMoviesActionCreator
} = require('../../movieModule.jsx')
const styles = require('./movies.css')

class Movies extends React.Component {
  componentWillMount() {
    console.log("componentWillMount ==== ");
    console.log(movies);
    this.props.fetchMovies(movies)
  }
  // Comment componentWillMount() and uncomment componentDidMount to use async fetch

  // componentDidMount() {
  //   fetch('/src/movies.json', {method: 'GET'})
  //     .then((response)=>{return response.json()})
  //     .then((movies)=>{
  //       this.props.fetchMovies(movies)
  //     })
  // }
  render() {
    const {
      children,
      movies = [],
      params = {}
    } = this.props

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          <h3>Movie List</h3>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movieInfo/list/${index + 1}`}>
                <li className={styles.movie}> {movie.title} </li>
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

module.exports = connect(({movies}) => ({
  movies: movies.all
}), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)
