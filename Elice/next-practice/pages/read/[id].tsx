import Layout from '@/components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const getServerSideProps = async () => {
  console.log(
    '🚀 ~ file: [id].tsx:14 ~ getServerSideProps ~ getServerSideProps:',
    getServerSideProps
  );
  return {
    props: {
      title: 'haha',
      body: 'hoho',
    },
  };
};

export default function Read(props) {
  console.log('🚀 ~ file: [id].tsx:17 ~ Read ~ Read:', Read);

  const router = useRouter();
  const [topic, setTopic] = useState(null);
  const id = router.query.id;
  useEffect(() => {
    if (id !== undefined) {
      fetch('/api/topics/' + id)
        .then((res) => res.json())
        .then((result) => setTopic(result));
    }
  }, [id]);
  if (topic === null) {
    return <>Loading...</>;
  }
  return (
    <>
      <Head>
        <title>WEB!</title>
      </Head>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
