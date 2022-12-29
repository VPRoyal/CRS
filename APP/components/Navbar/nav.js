import React, { Component } from 'react'
import styles from './nav.module.css'
export default class Nav extends Component {
  render() {
    return (
      <div className={styles.navbox} >
        <div id={styles.logo}>
            <img src="./Mnit_trans.png" alt=""/>
        </div>
        <div id={styles.title}>
            <h1>Complaint Redressal Portal</h1>
        </div>
      </div>
    )
  }
}
