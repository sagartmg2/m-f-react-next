import '@/styles/globals.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(null);

  return <>
    <Component user={user} {...pageProps} setUser={setUser} />
  </>
}
