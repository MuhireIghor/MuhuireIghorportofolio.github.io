import '../styles/globals.css';
import { AppProps } from 'next/dist/pages/_app';

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps}  />
}

export default MyApp
