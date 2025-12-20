import { GoogleTagManagerNoScript, GoogleTagManagerScript } from '@components';
import { portalRootId } from '@lib';
import { Head, Html, Main, NextScript } from 'next/document';

// https://nextjs.org/docs/advanced-features/custom-document
export default function Document() {
  return (
    <Html>
      <Head>
        <GoogleTagManagerScript />
      </Head>
      <body>
        <GoogleTagManagerNoScript />
        <Main />
        {/* used for the <Portal> Component */}
        <div id={portalRootId} />
        <NextScript />
      </body>
    </Html>
  );
}
