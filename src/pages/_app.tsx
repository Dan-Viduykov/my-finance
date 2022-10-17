import type { AppProps } from 'next/app';
import "@/styles/_reset.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
