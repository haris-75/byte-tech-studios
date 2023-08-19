import Head from 'next/head';
import '@/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Head>
        <title>Byte Tech Studios</title>
        <meta
          name='description'
          content='Where innovation meet tech'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
