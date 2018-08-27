import Document, { Head, Main, NextScript } from 'next/document'
import style from '../styles/style.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: style }} />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
