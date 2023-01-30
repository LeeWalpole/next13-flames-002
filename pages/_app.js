// pages/_app.js
import '../styles/reset.css'
import '../styles/fonts.css'
import '../styles/colors.css'
import '../styles/globals.css'
import Layout from '../components/Layout'

import NextNProgress from 'nextjs-progressbar';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#ee0099" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </Layout>
  )
}
