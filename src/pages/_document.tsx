import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
          strategy="afterInteractive"
        />
        <div
          id="appleid-signin"
          data-color="black"
          data-border="true"
          data-type="sign in"
        ></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
