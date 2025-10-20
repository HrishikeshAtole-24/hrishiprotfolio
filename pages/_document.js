import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        
        {/* Additional formats */}
        <link rel="icon" type="image/png" sizes="32x32" href="/log0_h.jpg?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/log0_h.jpg?v=2" />
        
        <meta name="theme-color" content="#2ecc71" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
