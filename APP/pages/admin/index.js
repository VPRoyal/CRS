import Head from 'next/head'
import Dashboard from '../../components/Admin/dashboard'
export default function index() {
  return (
    <>
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>CRS &#x2022; Admin</title>
        <link rel="icon" href="/Mnit_trans.png" type="image/x-icon"/>
      </Head>
    <Dashboard/>
    </>
  )
}
