import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="keywords"
          content="next,CV,Ivan Kashuba, portfolio,react,"
        />
        <description
          name="description"
          content="Ivan Kashuba React-developer web-site portfolio "
        />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
