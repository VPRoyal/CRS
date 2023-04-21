import styles from './user.module.css'
import { useState } from 'react'
import Select from '../../Customs/Select'
export default function userCard({data, databack, view }) {
    const [View, setView] = useState(false)
    const handleClick = (bool) => {
        setView(bool)
        databack({view:bool, id:data.id})
    }
    if (!view && View) setView(false)
    return (
        <div className={styles.body} style={{outline:data.active?"":"3px red solid", border:data.active?null:"none"}} >
            <div className={styles.item} style={{color:data.active?"var(--blue)":"red"}} ><span>{data.name}</span></div>
            <div className={styles.item} ><span>{data.id}</span></div>
            <div className={styles.item} ><span>{data.role}</span></div>
            <div className={styles.item} ><span>{data.post}</span></div>
            <div className={`${styles.item} ${styles.contact}`} >
                <div><span>Mobile: </span><span>{data.contact.phone}</span></div>
                <div><span>Email: </span><span>{data.contact.email}</span></div>
            </div>
            <div className={styles.item} >
                <div className={styles.icon} style={{ display: !View ? "flex" : "none" }} onClick={() => { handleClick(true) }}><span>View</span><span><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                </span></div>
                <div className={styles.icon} style={{ color: "var(--blue)", display: View ? "flex" : "none" }} onClick={() => { handleClick(false) }} ><span>Viewing</span><span><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
                </span></div>
            </div>
        </div>
    )
}
// ;