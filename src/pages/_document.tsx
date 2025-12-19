import { GoogleTagManagerNoScript, GoogleTagManagerScript } from '@components/common';
import { portalRootId } from '@src/lib/utilities';
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
