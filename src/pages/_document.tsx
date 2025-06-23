import { Html, Head, Main, NextScript } from 'next/document';
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from '@components/common/GoogleTagManager/GoogleTagManager';

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
        <NextScript />
      </body>
    </Html>
  );
}
