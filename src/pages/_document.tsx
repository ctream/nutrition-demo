import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <script
          type="module"
          crossOrigin="true"
          src="https://dev.ram-i.ai/assets/index.0.0.50.js"
    ></script>
        <body>
        <rami-bot
      api-key="5fd7da7e-875a-4ab5-b9c5-41bda5b90843"
      is-overlay="true"
    ></rami-bot>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
