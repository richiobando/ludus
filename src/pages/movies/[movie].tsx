import Head from 'next/head'
import { useRouter } from 'next/router'
import responseMovies from '../../data/movies-omdb.json'
import responseMovieTitle from '../../data/movie-title.json'
type Props = {}

export default function movie({}: Props) {
  const router = useRouter()
  const movieQuery = (router.query.movie as string[]) || []
  // TODO put in other file
  const movie = {
    actors: responseMovieTitle.Actors,
    awards: responseMovieTitle.Awards,
    country: responseMovieTitle.Country,
    dvd: responseMovieTitle.DVD,
    director: responseMovieTitle.Director,
    genre: responseMovieTitle.Genre,
    language: responseMovieTitle.Language,
    metascore: responseMovieTitle.Metascore,
    poster: responseMovieTitle.Poster,
    title: responseMovieTitle.Title,
    plot: responseMovieTitle.Plot,
    year: responseMovieTitle.Year,
    rated: responseMovieTitle.Rated,
    runtime: responseMovieTitle.Runtime,
    imdbRating: responseMovieTitle.imdbRating,
    writer: responseMovieTitle.Writer
  }

  return (
    <>
      <section>
        <h2>{movieQuery}</h2>
        <ul>
          <li>{movie.year}</li>
          <li>{movie.rated}</li>
          <li>{movie.runtime}</li>
        </ul>
      </section>
      <section>
        <h3>IMDb RATING</h3>
        <p>{movie.imdbRating}</p>
      </section>
      <img src={movie.poster} alt={movie.title} />
      <ul>{movie.genre.split(', ').map(genre => <li>{ genre}</li>)}</ul>
      <p>{movie.plot}</p>
      <p>Director {movie.director}</p>
      <p>Writers {movie.writer}</p>
      <p>Stars {movie.actors}</p>
    </>
  )
}
