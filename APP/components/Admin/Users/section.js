import { useState } from 'react'
import { ACTIONS } from '../../../state/userUpdateReducer'
import styles from './userUpdate.module.css'
export default function section({section={}, newSection=true, dispatch, state, Key}) {
    const isClose=state.closeOldSection.some(obj => obj.id === section.id)
    const handleClose=()=>{
        if(newSection) dispatch({type:ACTIONS.REMOVE_NEW_SECTION, payload:{id:section.id}})
        else dispatch({type:ACTIONS.REMOVE_OLD_SECTION, payload:{id:section.id}})
        
    }
    const handleCancel=()=>{
        dispatch({type:ACTIONS.CANCEL,payload:{id:section.id}})
    }
    return (
        <div className={styles.ibox} id={section.id} key={Key}>
            <span className={styles.sec} style={{outline:isClose?"solid 2px red":""}} >{section.name}</span>
            <span className={styles.level}>
                <input type="text" name="" disabled={true} value={section.level}  />
                </span>
            <div className={styles.icons} style={{display:isClose&&!newSection?"flex":"none"}} onClick={handleCancel} ><span>Cancel</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg></span></div>
            <div className={styles.icons} style={{display:isClose?"none":"flex"}} onClick={handleClose} ><span>Close</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg></span></div>
        </div>
    )
}
