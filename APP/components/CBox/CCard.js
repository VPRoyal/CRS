import { useState } from 'react'
import styles from './CCard.module.css'
import TContainer from './TContainer'
import useFetchComplainsByID from '../../hooks/useFetchComplainByID'
import { ACTIONS } from '../../state/cardUpdateReducer'
export default function CCard({ key, id, state, dispatch }) {
  const [visible, setVisible] = useState(false)
  const [data, err, isFetching] = useFetchComplainsByID(id)
  const handleUpvote = () => {
    dispatch({ type: ACTIONS.UPVOTE, payload: { id: id, userID: "2019UMT1500" } })
  }
  return (
    <div className={styles.box} key={key}>
      {!isFetching && data && <div className={styles.main}>
        <div id={styles.id}>
          {/* Below will come 16 DIGIT ID */}
          <p><span>{data.id}</span></p>
          <p>
            <span onClick={handleUpvote} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
            </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </span>
            <span>{data.upvotes.total}</span>
          </p>
        </div>
        <div id={styles.title}>
          <h3>{data.title}</h3>
          <span className={styles.desc} >{data.title}</span>
        </div>
        <div id={styles.body}>
          <div id={styles.left} >
            <div id={styles.details}>
              <div id={styles.section}>
                <span>{data.activeSection}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg></span>
              </div>
              <div id={styles.date}>
                <span>{data.date}</span>
              </div>
            </div>
          </div>
          <div id={styles.right}>
            <span>{data.description}</span>
            <span className={styles.desc}>{data.description}</span>
          </div>
        </div>
        <div id={styles.footer}>
          <div onClick={() => { setVisible(!visible) }}>
            <span>
              <svg style={{display:visible?"unset":"none"}} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
              <svg style={{display:visible?"none":"unset"}} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <label>Thread</label>
            </span>
          </div>
          <div><span>Pending</span></div>
        </div>
      </div>
      }
      {visible && <div id={styles.thread}><TContainer dispatch={dispatch} state={state} id={id} /></div>}
    </div>
  )
}
