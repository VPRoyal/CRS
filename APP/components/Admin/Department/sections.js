import styles from './sections.module.css'
import SCard from './SCard'
export default function sections() {
  return (
    <div className={styles.wrapper} >
        <div className={styles.head} >
          <h4>Sections</h4>
        </div>
        <div className={styles.body} >
                  <SCard/>
                  <SCard/>
                  <SCard/>
                  <SCard/>
        </div>
    </div>
  )
}
