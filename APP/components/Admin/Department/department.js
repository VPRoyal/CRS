import React from 'react'
import styles from './department.module.css'
import Details from './details'
import Sections from './sections'
export default function department() {
    return (
        <div className={styles.wrappper} >
            <Details/>
            <Sections/>
        </div>
    )
}
