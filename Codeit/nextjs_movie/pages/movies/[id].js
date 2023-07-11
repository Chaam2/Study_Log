import { useRouter } from 'next/router';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  return <>Movie page #{id}</>;
}
