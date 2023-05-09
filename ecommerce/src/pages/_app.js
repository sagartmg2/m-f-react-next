import '@/styles/globals.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return <>
    <Component user="Ram" {...pageProps} />
  </>
}
