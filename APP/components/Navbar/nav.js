import React, { Component } from 'react'
import styles from './nav.module.css'
export default class Nav extends Component {
  render() {
    return (
      <div id={styles.navbox} >
        <div id={styles.logo}>
            <img src="./Mnit_trans.png" alt=""/>
        </div>
        <div id={styles.title}>
            <h1>Request Redressal System</h1>
            <h3>(A Portal to lodge complaints and provide suggestions)</h3>
        </div>
        <div id={styles.account} >
          <a href=""><span>Signin/Signup</span></a>
        </div>
      </div>
    )
  }
}
