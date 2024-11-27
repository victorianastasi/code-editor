import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Head from "next/head";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Editor Obelisco</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
