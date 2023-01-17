import { Component } from 'react'
import CCard from './CCard'
import Filter from './Filter'
import styles from './CContainer.module.css'
export default class CContainer extends Component {
  render() {
    return (
      <div className={styles.main} >
        <div id={styles.left}>
          <Filter/>
        </div>
        <div id={styles.right}>
          <CCard />
          <CCard />
          <CCard />
          <CCard />
          <CCard />
        </div>

      </div>
    )
  }
}
