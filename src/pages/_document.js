import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <html>
        <Head/>
        <body className="custom_class">
          <header>HKV Header</header>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}