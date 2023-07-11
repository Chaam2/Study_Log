import '@/styles/globals.css';
import Headers from '@/components/Header';
import Container from '@/components/Container';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Container page>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
