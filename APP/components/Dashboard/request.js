import styles from './request.module.css'
export default function request() {
  return (
    <div className={styles.container} >
      <div className={styles.header} >
        <h2>16 DIGIT ID HERE</h2>
      </div>
      <div className={styles.body} >
        <div className={styles.section} >
           <div className={styles.title}><span>Title</span></div>
           <div className={styles.text}><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i</span></div>
        </div>
        <div className={styles.section} >
           <div className={styles.title}><span>Department</span></div>
           <div className={styles.text}><span>Dean of Student welfare</span></div>
        </div>
        <div className={styles.section} >
           <div className={styles.title}><span>Description</span></div>
           <div className={styles.text}><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
        </div>
        <div className={styles.section} >
           <div className={styles.title}><span>Title</span></div>
           <div className={styles.text}><span>This is a title which has to be </span></div>
        </div>
      </div>
    </div>
  )
}
