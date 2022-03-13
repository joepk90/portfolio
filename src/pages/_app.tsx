import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { SEO } from '@src/config';
import GlobalCSS from '@src/components/GlobalCSS/GlobalCSS';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp