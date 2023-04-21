import React from 'react'
import styles from './DBox.module.css'
import Department from './department'
const departments = ["Metallurgy", "Architecture", "CSE", "Electronics", "Mechanical", "Electrical"]
export default function dbox() {
    return (
        <div className={styles.wrapper} >
            <h2>Departments</h2>
            <div className={styles.box} >
                <div className={styles.department}>
                    <ul className={styles.DCard} >
                        {
                            departments.map((data, key) => {
                                return <li key={key} ><span>{data}</span><span className={styles.icon} ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                              </svg></span></li>
                            })
                        }
                    </ul>
                    <div  >
                        <span>Show More</span>
                        <span className={styles.icon} ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg></span>
                    </div>
                </div>
                <div className={styles.view} style={{ display: "none" }}>
                    <div className={styles.head}><span className={styles.icon} ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></span><span>Metallurgy</span></div>
                    <Department/>
                </div>

            </div>
        </div>
    )
}
