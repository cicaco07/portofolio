/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <title>Aryo Deva Saputra</title>
          <link rel="icon" href="/icons/letter-a.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
