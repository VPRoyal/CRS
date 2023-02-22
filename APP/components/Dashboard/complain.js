import React from 'react'
import styles from './complain.module.css'
export default function complain() {
  return (
    <div className={styles.wrapper} >
        <div className={styles.box} >
            <form className={styles.form}>
                <div className={styles.column} name='title' >
                    <h3>Title</h3>
                    <input type="" name="" value=""/>
                </div>
                <div className={styles.column} name='type'>
                    <h3>Type of Complain</h3>
                    <input type="radio" name="type" value="Public"/>
                    <input type="radio" name="type" value="Private"/>
                </div>
                <div className={styles.column} name='section'>
                    <h3>Concerned Section</h3>
                    <input type="" name="" value=""/>
                </div>
                <div className={styles.column} name='description' >
                    <h3>Description.</h3>
                    <input type="" name="" value=""/>
                </div>
                <div className={styles.column} name='attachment' >
                    <h3>Any Document</h3>
                    <input type="" name="" value=""/>
                </div>
            </form>
        </div>
    </div>
  )
}
