import Link from 'next/link';
import { useEffect, useState } from 'react';
type topicType = {
  id: number;
  title: string;
  body: string;
};

//@ts-ignore
export default function Layout(props) {
  const [topics, setTopics] = useState<topicType[]>([]);
  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((result) => setTopics(result));
  }, []);
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
        <li>
          <Link href="/update">Update</Link>
        </li>
        <li>
          <Link href="/delete">Delete</Link>
        </li>
      </ul>
    </>
  );
}
