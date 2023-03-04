import React from 'react'
import styles from './analytics.module.css'
export default function analytics() {
  return (
    <div className={styles.analytics}>
            <div className={styles.box} >
                    <span style={{color:"var(--yellow)"}}>108</span>
                    <span>Total Complaints</span>
            </div>
            <div className={styles.box} >
            <span style={{color:"var(--green)"}} >4000</span>
                    <span>Total Resolved Complaints</span>
            </div>
            <div className={styles.box} >
                    <span style={{color:"red"}}>0</span>
                    <span>Total Pending Complaints</span>
                </div>
        </div>
  )
}
