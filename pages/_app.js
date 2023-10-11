import React from "react"
import Head from "next/head"
import "../app/global.css"
import {SessionProvider} from "next-auth/react"

function MyApp({Component, pageProps}) {
  return (
    <SessionProvider>
      <Head>
        <title>marketwavestroe-dashboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
