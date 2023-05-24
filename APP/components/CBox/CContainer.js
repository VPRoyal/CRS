import CCard from './CCard'
import Filter from './Filter'
import styles from './CContainer.module.css'
import useFetchComplainsID from '../../hooks/useFetchComplainsID'

export default function CContainer() {
  const [data,err]= useFetchComplainsID(1,10)

  return (
    <div className={styles.main} >
      <div id={styles.left}>
        <Filter/>
      </div>
      <div id={styles.right}>
        {data&&data.map((val, key)=>{
          return <CCard key={key} id={val.id}/>
        })}
      </div>

    </div>
  )
}


