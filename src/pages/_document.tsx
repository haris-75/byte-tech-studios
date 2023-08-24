import { Html, Head, Main, NextScript } from 'next/document';
import { React } from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}