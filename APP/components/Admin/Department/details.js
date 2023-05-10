import { useRef, useState } from 'react'
import styles from './details.module.css'
const staff = [{ "name": "Prof. Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }, { "name": "Mahesh Jat", "post": "Dean", "level": 4 }]
export default function details() {
    const [isEditing, setEditing]=useState(false)
    const desc=useRef()
    const handleCancel=()=>{
        desc.current.value=desc.current.defaultValue
        setEditing(false)
    }
    return (
        <div className={styles.details}>
            <div className={styles.desc} >
                <div className={styles.head} >
                    <h4>Description</h4>
                </div>
                <div className={styles.body}>
                    <textarea disabled={!isEditing} rows="10" ref={desc} defaultValue="Hi, this is vinay"></textarea>
                </div>
                <div className={styles.footer} >
                    <div className={styles.icon} style={{display:isEditing?"":"none"}} onClick={handleCancel} ><span>Cancel</span><span><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></div>
                    <div className={styles.icon} style={{display:isEditing?"none":""}} onClick={()=>{setEditing(true)}} ><span>Edit</span><span><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg></span></div>
                    <div className={styles.icon} style={{display:isEditing?"":"none"}}><span>Save</span><span><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg></span></div>
                </div>
            </div>
            <div className={styles.staff} >
                <div className={styles.head} >
                    <h4>Administration</h4>
                </div>
                <div className={styles.body} >
                    {
                        staff.map((val, key) => {
                            return <li key={key} ><span>{val.name}</span> &#x2022; <span>{val.post}</span> &#x2022; <span>L{val.level}</span></li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
