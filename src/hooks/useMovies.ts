import responseMovies from '../data/movies-omdb.json'
export function useMovies () {
  const movies = responseMovies.Search
  const mappedMovies = movies?.map((movie) => ({
    poster: movie.Poster,
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year
  }))
  return { movies: mappedMovies }
}
