import Layout from '@/components/Layout';
import Head from 'next/head';
import Router from 'next/router';

export default function Home() {
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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body }),
          };
          fetch(process.env.NEXT_PUBLIC_API_URL + '/api/topics', option)
            .then((resp) => resp.json())
            .then((result) => {
              console.log(result);
              Router.push(`/read/${result.id}`); //경로를 이동시켜준다.
            });
        }}
      >
        <h2>Create</h2>
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </>
  );
}
