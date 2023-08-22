import Head from 'next/head';
import '@/globals.css';
import React from 'react';
import Layout from '@/components/Layout';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
