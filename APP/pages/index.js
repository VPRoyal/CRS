import Head from 'next/head'
import CContainer from '../components/CBox/CContainer'
export default function Home() {
    return(
      <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>CRS &#x2022; Portal</title>
        <link rel="icon" href="/Mnit_trans.png" type="image/x-icon"/>
      </Head>
      <CContainer/>
      </>
    )
  }
  