import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import SEO from '@src/seo-config';
import 'normalize.css';
import '@styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp