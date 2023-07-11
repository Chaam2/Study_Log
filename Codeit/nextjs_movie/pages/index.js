import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const getMovieList = async () => {
    const response = await axios.get(`/movies/`);
    setMovies(response.data.results);
  };
  console.log(movies);
  useEffect(() => {
    getMovieList();
  }, []);

  if (!movies) return null;

  return (
    <>
      <Header />
      <Container page>
        <SearchForm />
        <MovieList className={styles.movieList} movies={movies} />
      </Container>
    </>
  );
}
