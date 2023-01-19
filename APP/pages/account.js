import React, { Component } from 'react'
import Head from 'next/head'
import Accounts from '../components/Account/accounts'
export default class account extends Component {
  render() {
    return (
      <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title >CRS &#x2022; Account</title>
        <link rel="icon" href="/Mnit_trans.png" type="image/x-icon" />
      </Head>
      <Accounts/>
    </>
    )
  }
}