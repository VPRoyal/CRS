import { Component } from 'react'
import Link from "next/link"
import styles from './header.module.css'
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
          <Link href="/account/" ><span>Login</span></Link>
        </div>
      </div>
    )
  }
}
