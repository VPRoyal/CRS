import React from 'react'
import styles from './dashboard.module.css'
import CCard from '../CBox/CCard'
export default function dashboard() {
  return (
    <div className={styles.main} >
        <div className={styles.header} >
            <h2>Lodged Requests</h2>
        </div>
        <div className={styles.body} >
            <div className={styles.container} >
                    <CCard/>
                    <CCard/>
                    <CCard/>
                    <CCard/>
                    <CCard/>
                    <CCard/>
            </div>
        </div>
    </div>
  )
}
