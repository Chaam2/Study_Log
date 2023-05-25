import Layout from '@/components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const getServerSideProps = async (context) => {
  console.log('getServerSideProps');
  const response = await fetch(
    'http://localhost:3000/api/topics/' + context.query.id
  ); //풀 경로를 넣어줘야한다(context)는 서버에서 실행되기때문
  const result = await response.json();
  return {
    props: result,
  };
};

export default function Read(props) {
  console.log('Read', props);

  return (
    <>
      <Head>
        <title>WEB!</title>
      </Head>
      <h2>{props.title}</h2>
      {props.body}
    </>
  );
}
