import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>
        </Head>
        <body className="custom_class">
            <header>HKV Header</header>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}