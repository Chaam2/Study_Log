import { useRouter } from 'next/router';
import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Search.module.css';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const q = router.query['q'];
  const [movies, setMovie] = useState([]);

  const getSearchedMovie = async () => {
    const response = await axios.get(`/movies/?q=${q}`);
    setMovie(response.data.results ?? []);
  };
  useEffect(() => {
    getSearchedMovie();
  }, [q]);

  return (
    <>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={movies} />
    </>
  );
}
