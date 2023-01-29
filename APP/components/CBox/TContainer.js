import { Component } from 'react'
import Thread from './Thread'
import styles from './TContainer.module.css'
export default class TContainer extends Component {
  render() {
    return (
      <div className={styles.container} >
        <div className={styles.head} >
          <h2>Conversation Thread</h2>
        </div>
        <div className={styles.TBox} >
        <Thread type="authority"/>
        <Thread type="student" />
        <Thread type="system"/>
        <Thread type="authority"/>
        <Thread type="student" />
        </div>
        <div className={styles.AnsBox}>

        </div>
      </div>
    )
  }
}
