import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { SEO } from '@src/config';
import { GlobalCSS } from '@components/GlobalCSS';
import { BrushStrokeSVGClipPath } from '@components/common';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalCSS />
      <Component {...pageProps} />
      <BrushStrokeSVGClipPath />
    </>
  );
}

export default MyApp;
