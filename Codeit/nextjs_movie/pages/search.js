import SearchForm from '@/components/SearchForm';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <h1>Watch it</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
    </>
  );
}