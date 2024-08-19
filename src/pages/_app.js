import Head from "next/head";

import { Auth0Provider } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

import "@/styles/globals.css";
import GlobalStyles from "@/styles/global";

export default function App({ Component, pageProps }) {
  let [location, setLocation] = useState('http://www.localhost:3000/')

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setLocation(window.location.origin)
    }
  }, [])

  return (
    // <Auth0Provider
    //   domain="dev-bn8s278zc54ocjvv.us.auth0.com"
    //   clientId="kl6LAPOx7pSTazNZg07jQcfxiXJIdDED"
    //   authorizationParams={{
    //     redirect_uri: location,
    //   }}
    // >
    <>
      <Head>
        <title>Collabeditor</title>
        <meta name="description" content="Collaborate on documents with others" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles>
        <main>
          <Component {...pageProps} />
        </main>
      </GlobalStyles>
      </>
    // </Auth0Provider>
  );
}
