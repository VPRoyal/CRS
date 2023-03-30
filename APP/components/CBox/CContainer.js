import CCard from './CCard'
import Filter from './Filter'
import styles from './CContainer.module.css'
import {useFetchComplainsID} from '../../hooks/useFetchComplainsID'

export default function CContainer({cards}) {
  console.log("hi",cards)
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
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  console.log("server",process.env.REACT_APP_APIURL)
  const cards= useFetchComplainsID()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cards,
    },
  }
}

