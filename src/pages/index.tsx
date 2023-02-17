import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRef,  LegacyRef } from 'react'
import Link from 'next/link'

import { useMovies } from '../hooks/useMovies'
export default function Home() {
  const inputRef: LegacyRef<HTMLInputElement> = useRef()
  const { movies } = useMovies()

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = inputRef!.current.value
  }
  return (
    <>
      <Head>
        <title>Ludus</title>
        <meta name='description' content='Review for series and movies' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Movies</h1>
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} />
            <button type='submit'>Search</button>
          </form>
        </div>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={{
              pathname: '/movies/[movie]',
              query: { movie: movie.title }
            }}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </Link>
        ))}
      </main>
    </>
  )
}
