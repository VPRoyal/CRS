import React, { useState } from 'react'
import styles from './DBox.module.css'
import Department from './department'
import useFetchDivisions from '../../../hooks/useFetchDivisions'
const departments = ["Metallurgy", "Architecture", "CSE", "Electronics", "Mechanical", "Electrical"]
export default function dbox() {
    // Hooks management ----->>>>>
    const [isFetching, division,err]=useFetchDivisions()
    const divisions=division()

    // States Management ---->>>>>
    const [expanded, setExpanded]=useState(false)
    const [departID,setDepartID]=useState(null)
    return (
        <div className={styles.wrapper} >
            <h2>Departments</h2>
            <div className={styles.box} >
                {!departID&&<div className={styles.department}>
                    <ul className={`${styles.DCard} ${expanded?styles.expanded_DCard:""}`} >
                        {
                            divisions.map((data, key) => {
                                return <li key={key} id={data.departID} onClick={(e)=>{setDepartID(e.target.id)}}><span>{data.departName}</span><span className={styles.icon} ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                              </svg></span></li>
                            })
                        }
                    </ul>
                    <div className={styles.showmore}>
                        <div onClick={()=>{setExpanded(!expanded)}} >
                        <span>{!expanded?"Show more":"Show less"}</span>
                        <span style={{transform: expanded?"rotateZ(180deg)":""}} className={styles.icon} ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg></span>
                        </div>
                    </div>
                </div>}
                {departID&&<Department departID={departID} moveBack={()=>setDepartID(null)} />}
            </div>
        </div>
    )
}
