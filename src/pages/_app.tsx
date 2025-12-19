import { BrushStrokeSVGClipPath, GlobalCSS } from '@components';
import { SEO } from '@config';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
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
