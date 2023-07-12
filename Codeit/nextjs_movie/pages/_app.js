import '@/styles/globals.css';
import Headers from '@/components/Header';
import Container from '@/components/Container';
import { ThemeProvider } from '@/lib/ThemeContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WATCHIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Headers />
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
