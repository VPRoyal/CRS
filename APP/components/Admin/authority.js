import React from 'react'
import styles from './authority.module.css'
import AuthorityItem from './authorityItem'
export default function authority() {
    return (
        <div className={styles.wrapper} >
            <h2>Authorities</h2>
            <div className={styles.box} >


                <div className={styles.head} >
                    <div className={styles.item} ><span>Name ID Post</span></div>
                    <div className={styles.item} ><span>Department</span></div>
                    <div className={styles.item} ><span>Section</span></div>
                    <div className={styles.item} ><span>Level</span></div>
                    <div className={styles.item} ><span>Contact</span></div>
                    <div className={styles.item} ><span>Action</span></div>
                </div>
                <div className={styles.wrap} >
                    <AuthorityItem />
                    <AuthorityItem />
                    <AuthorityItem />
                    <AuthorityItem />

                </div>
                <div className={styles.footer} >
                    <span>Show More</span>
                    <span className={styles.icon} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg></span>
                </div>
            </div>
        </div>
    )
}
// reset={reset}
// reset={reset}
// reset={reset}
{/* <input type="" name="" value="" min="1" max="4" oninput="validity.valid||(value='');"/> */ }