import { Component } from 'react'
import Head from 'next/head'
import Signup from '../../components/Account/signup'
export default class account extends Component {
  render() {
    return (
      <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title >CRS &#x2022; Registration</title>
        <link rel="icon" href="/Mnit_trans.png" type="image/x-icon" />
      </Head>
      <div style={{ "width": "100%", "height": "100vh", "backgroundColor": "var(--yellow)" }}>
        <Signup/>
      </div>
    </>
    )
  }
}