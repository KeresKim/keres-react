const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const {
  fetchMovieActionCreator
} = require('../../movieModule.jsx')
const styles = require('./movie.css')

class Movie extends React.Component {
  componentWillMount() {
    console.log("movie conponent will mount==== keres");
    this.props.fetchMovie(this.props.params.id)
  }

  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }

  render() {
    const {
      movie = {
        starring: []
      }
    } = this.props

    return (
      <div className={styles.movie} >
          <table>
            <tbody>
              <tr>
                <td>                
                  <div>
                    <img src={movie.cover} style={{width:250}}/>
                  </div>
                </td>
                <td>    
                  <div className={styles.description}>
                    <ul className={styles.title}>{movie.title}</ul>
                    <ul className={styles.year}>{movie.year}</ul>
                    <div className={styles.starring}>
                      {movie.starring.map((actor = {}, index) => (
                        <ul
                          key={index}
                          className={styles.actor}>
                          {actor.name}
                        </ul>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>  
          </table>
          <Link
            className={styles.closeButton}
            to="/movieInfo/list">
            <h2> ← ← ← Back to Movie List </h2>
          </Link>
      </div>
    )
    /*return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
        <div
          className={styles.cover}
          style={{backgroundImage: `url(${movie.cover})`}} />
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className={styles.closeButton}
          to="/movieInfo/list">
          ←
        </Link>
      </div>
    )*/
  }
}

module.exports = connect(({movies}) => ({
  movie: movies.current
}), {
  fetchMovie: fetchMovieActionCreator
})(Movie)
