import { Component } from 'react'
import styles from './CCard.module.css'
export default class CCard extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div id={styles.id}>
          <p><span>16 DIGIT ID HERE</span></p>
          <p><span>Upvote</span><span>40</span></p>
        </div>
        <div id={styles.title}>
          <h3>IT IS TITLE FOR THE COMPLAINT</h3>
        </div>
        <div id={styles.body}>
          <div id={styles.left} >
            <div id={styles.details}>
              <div id={styles.section}>
                <span>DEPARTMENT/SECTION</span>
              </div>
              <div id={styles.date}>
                <span>POSTED date</span>
              </div>
            </div>
          </div>
          <div id={styles.right}>
            <span>Description related to complaint will be posted here. Can be small or large</span>
          </div>
        </div>
        <div id={styles.footer}>
          <div><span>Pending Devision</span></div>
          <div><span>View thread</span></div>
        </div>
        <div id={styles.thread}>
          There will the proceeding of the thread
        </div>
      </div>
    )
  }
}
