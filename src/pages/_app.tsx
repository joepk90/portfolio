import { BrushStrokeSVGClipPath } from '@components/common';
import { GlobalCSS } from '@components/GlobalCSS';
import { SEO } from '@src/config';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
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
