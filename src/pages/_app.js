import { Auth0Provider } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  let [location, setLocation] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setLocation(window.location.origin)
    }
  }, [])

  return (
    <Auth0Provider
      domain="dev-bn8s278zc54ocjvv.us.auth0.com"
      clientId="kl6LAPOx7pSTazNZg07jQcfxiXJIdDED"
      authorizationParams={{
        redirect_uri: location,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
