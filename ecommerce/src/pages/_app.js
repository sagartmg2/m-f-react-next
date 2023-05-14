import '@/styles/globals.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(null);

  return <>
   <Provider store={store}>
    <Component user={user} {...pageProps} setUser={setUser} />
   </Provider>
  </>
}
