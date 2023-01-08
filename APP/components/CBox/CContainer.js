import { Component } from 'react'
import CCard from './CCard'
import styles from './CContainer.module.css'
export default class CContainer extends Component {
  render() {
    return (
      <div className={styles.main} >
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
      </div>
    )
  }
}
