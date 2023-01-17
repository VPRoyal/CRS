import { Component } from 'react'
import styles from './CCard.module.css'
export default class CCard extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.main}>
        <div id={styles.id}>
          <p><span>16 DIGIT ID HERE</span></p>
          <p>
            <span><svg viewBox="0 0 36 36" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet"><path fill="#FBC02A" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path><path fill="#FFF" d="M22 29v-9h7L18 7L7 20h7v9z"></path></svg></span>
            <span>40</span>
          </p>
        </div>
        <div id={styles.title}>
          <h3>It is the title of complaint</h3>
          <span className={styles.desc} >It is the title of compalint and its box whixh is gonna be large. So, we here creating a seperation for it so that it may work</span>
        </div>
        <div id={styles.body}>
          <div id={styles.left} >
            <div id={styles.details}>
              <div id={styles.section}>
                <span>DoSW</span>
              </div>
              <div id={styles.date}>
                <span>26 Jan 2023</span>
              </div>
            </div>
          </div>
          <div id={styles.right}>
            <span>Description related to complaint will be posted here. Can be small or large. So, here it is the largest scam here. and I'm building a website out of it.</span>
            <span className={styles.desc}>Description related to complaint will be posted here. Can be small or large. So, here it is the largest scam here. and I'm building a website out of it.</span>
          </div>
        </div>
        <div id={styles.footer}>
          <div><span>Pending</span></div>
          <div><span>View thread</span></div>
        </div>
        </div>
        <div id={styles.thread}>
          There will the proceeding of the thread
        </div>
      </div>
    )
  }
}
