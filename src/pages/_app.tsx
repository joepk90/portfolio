import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { SEO } from '@src/config';
import GlobalCSS from '@src/components/GlobalCSS/GlobalCSS';
import { BrushStrokeSVGClipPath } from '@components/common/BrushStroke/BrushStroke';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalCSS />
      <BrushStrokeSVGClipPath />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp