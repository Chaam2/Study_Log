import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
type topicType = {
  id: number;
  title: string;
  body: string;
};

//@ts-ignore
export default function Layout(props) {
  const [topics, setTopics] = useState<topicType[]>([]);
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((result) => setTopics(result));
  }, [router.asPath]);
  return (
    <>
      <header>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
      </header>
      <input type="text" placeholder="search"></input>
      <nav>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
      <article>{props.children}</article>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        {id === undefined ? (
          <></>
        ) : (
          <>
            <li>
              <Link href={`/update/${id}`}>Update</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  fetch(process.env.NEXT_PUBLIC_API_URL + '/api/topics/' + id, {
                    method: 'DELETE',
                  })
                    .then((res) => res.json())
                    .then((result) => router.push('/'));
                }}
              >
                Delete
              </button>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
