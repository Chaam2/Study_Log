import Layout from '@/components/Layout';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
export const getServerSideProps = async (context) => {
  console.log('getServerSideProps', context.query.id);
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/topics/' + context.query.id
  ); //풀 경로를 넣어줘야한다(context)는 서버에서 실행되기때문
  const result = await response.json();
  return {
    props: result,
  };
};

export default function Home(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>WEB!</title>
      </Head>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          const title = evt.target.title.value;
          const body = evt.target.body.value;
          console.log(title, body);
          const option = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body }),
          };
          fetch(
            process.env.NEXT_PUBLIC_API_URL + '/api/topics/' + props.id,
            option
          )
            .then((resp) => resp.json())
            .then((result) => {
              console.log(result);
              router.push(`/read/${result.id}`); //경로를 이동시켜준다.
            });
        }}
      >
        <h2>Update</h2>
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </>
  );
}
