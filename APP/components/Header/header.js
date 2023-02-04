import { useState } from 'react'
import Link from "next/link"
import styles from './header.module.css'
import Nav from './Nav'
import { useRouter } from 'next/router'

export default function header() {
  const router=useRouter()
  const IsDashboard=router.pathname.startsWith('/dashboard')
  return (
    <div id={styles.header} >
        <div id={styles.logo}>
            <img src="./Mnit_trans.png" alt=""/>
        </div>
        <div id={styles.title}>
            <h1>Request Redressal System</h1>
            <h3>(A Portal to lodge complaints and provide suggestions)</h3>
        </div>
        <>{IsDashboard?<Nav/>:null}</>
        <div id={styles.account} >
          {IsDashboard?<Link href="/account/" ><span>Logout</span></Link>:<Link href="/account/" ><span>Login</span></Link>}
        </div>
      </div>
  )
}
