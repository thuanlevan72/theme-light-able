import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
    // dir='rtl'
    >
      <Head />
      <body  data-pc-sidebar-theme="light" data-pc-sidebar-caption="true"  className="component-page">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
