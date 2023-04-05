import React from 'react'
import styles from './dashboard.module.css'
import Analytics from './analytics'
import DBox from './Department/DBox'
import User from './Users/user'
export default function dashboard() {
  return (
    <div className={styles.wrapper} >
        <Analytics/>
        <DBox/>
        <User/>
    </div>
  )
}
