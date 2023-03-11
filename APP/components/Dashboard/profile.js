import React from 'react'
import styles from './profile.module.css'
export default function profile() {
  return (
    <div className={styles.wrapper} >
        <div className={styles.box} >
            <div className={styles.head} >
            <h2>My Profile</h2>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
</svg></span>
            </div>
            <form className={styles.form} >
                <div className={styles.column}>
                    <h4>Name</h4>
                    <input type="text"/>
                </div>
                <div className={styles.column}>
                    <h4>ID</h4>
                    <input type="text"/>
                </div>
                <div className={styles.column}>
                    <h4>Account Type</h4>
                    <input type="text"/>
                </div>
                <div className={styles.column}>
                    <h4>Department</h4>
                    <input type="text"/>
                </div>
                <div className={styles.column}>
                    <h4>Section</h4>
                    <input type="text"/>
                </div>
                <div className={styles.column}>
                    <h4>Reporting officer</h4>
                    <input type="text" value="VP SINGH" disabled/>
                </div>
                <div className={styles.column}>
                    <h4>Password</h4>
                    <input type="text"/>
                </div>
                <div className={styles.column}>
                    <h4>Confirm Password</h4>
                    <input type="text"/>
                </div>
            </form>
            <div className={styles.button} >
                    <button type="submit">Save</button>
                    <button type="reset">Cancel</button>
                </div>
        </div>
    </div>
  )
}
