import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import Script from "next/script"
import '../styles/globals.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import "../styles/about/aboutStyle.css"
import "../styles/business/businessStyle.css"


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SSRProvider> 
    
  )
}

export default MyApp
