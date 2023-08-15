import CCard from './CCard'
import axios from 'axios'
import Filter from './Filter'
import styles from './CContainer.module.css'
import useFetchComplainsID from '../../hooks/useFetchComplainsID'
import { useEffect, useReducer } from 'react'
import { reducer, initialState, ACTIONS } from '../../state/cardUpdateReducer'
export default function CContainer() {
  const [data,err]= useFetchComplainsID(1,10)
  const [state, dispatch]=useReducer(reducer, initialState)

  const handlePost = (data,action) => {
    axios.put('http://localhost:5000/complain/action/', {
        action:action,
        data:data
    })
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
      });
  }
  useEffect(()=>{
    console.log("run1 triggeer:", state.trigger)
    if(state.trigger) {
      handlePost(state.data, state.action)
      dispatch({type:ACTIONS.RESET, payload:""})
    }
  },[state.trigger])
  return (
    <div className={styles.main} >
      <div id={styles.left}>
        <Filter/>
      </div>
      <div id={styles.right}>
        {data&&data.map((val, key)=>{
          return <CCard state={state} dispatch={dispatch} key={key} id={val.id}/>
        })}
      </div>

    </div>
  )
}


