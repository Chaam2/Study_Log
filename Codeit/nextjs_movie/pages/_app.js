import '@/styles/globals.css';
import Headers from '@/components/Header';
import Container from '@/components/Container';
import { ThemeProvider } from '@/lib/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Headers />
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
