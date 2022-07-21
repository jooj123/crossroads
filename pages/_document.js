/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' id='google-fonts-css'  href='//fonts.googleapis.com/css?family=Amatic+SC%3A400%2C700%7CRoboto+Slab%3A400%2C700%2C300&#038;ver=4.2.22' type='text/css' media='screen' />

        <meta
          name="description"
          content="Crossroads Youth and Family Counselling"
        />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body className="home blog  sidebar-off" id="top">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}