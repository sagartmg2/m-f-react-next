import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <p>App Comopnnet</p>
    <Component user="Ram" {...pageProps} />
  </>
}
