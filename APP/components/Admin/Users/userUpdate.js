import styles from './userUpdate.module.css'
import PersonalForm from './personalForm'
import DepartmentalForm from './departmentalForm'
import MessageBox from '../../Customs/messageBox'
import { useState, useReducer, useEffect } from 'react'
import axios from 'axios'
import useFetchProfileByID from '../../../hooks/useFetchProfileByID'
import {reducer, initialState, ACTIONS} from '../../../state/userUpdateReducer'

export default function userUpdate({ id, onClose }) {
    // Using complex state management---->>>>>
    const [state, dispatch]=useReducer(reducer, initialState)

    // Using Hooks---->>>>
    const [isFetching, err, profile] = useFetchProfileByID(id)

    // Using States---->>>>
    const [active, setActive] = useState(true)
    const [save, setSave] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const Data = () => {
        // Have to validate data over here.
        // Check for password and confirm password.
        return {
            id:id,
            updateProfile:state.profile,
            department:state.department,
            addSection:state.newSection,
            closeSection:state.closeOldSection.map(sec=>sec.id)
        }
    }
    const post = (data) => {
        axios.put('http://localhost:5000/profile/', data)
            .then((res) => { 
                dispatch({type:ACTIONS.MESSAGE, payload:"Profile Updated Successfuly!"})
            })
            .catch((err) => {
                console.log("Error: ", err)
                dispatch({type:ACTIONS.MESSAGE, payload:"Problems updating profile!"})
             })
            .finally(() => {
                setSave(false)
            });
    }
    const submit=()=>{
        setSave(true)
        const data=Data()
        console.log(data.closeSection)
        post(data)
    }
    return (
        <div className={styles.wrapper} >

            <div className={styles.box} style={{ outline: (active ? "" : "solid 3px red") }}>
                <div className={styles.inactive} style={{ display: (active ? "none" : "unset") }} >Account Deactivated</div>
                <div className={styles.close} onClick={() => { onClose() }} >
                    <span className={styles.icon} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                        </svg>
                    </span>
                </div>
                <div className={styles.head} >
                    <h2>User Update</h2>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                        </svg>
                    </span>

                </div>
                <div className={styles.form}  >
                    {profile && <PersonalForm profile={profile} refresh={refresh} dispatch={dispatch} state={state} />}
                    {profile && <DepartmentalForm sections={profile.activeSections} dispatch={dispatch} state={state} />}
                </div>
                <div className={styles.footer} >
                   {state.message && <MessageBox message={state.message}/>}
                <div className={styles.button} >
                    <button type="submit" onClick={submit}>{save?'Saving...':'Save'}</button>
                    <button type="reset" onClick={()=>{setRefresh(!refresh)}}>{'Reset'}</button>
                    <button type="active" style={{ backgroundColor: (active ? "" : "green") }} onClick={() => { setActive(!active) }}>{active ? "Deactivate" : "Activate"}</button>
                </div>
                </div>
            </div>
        </div>
    )
}


//reset?'Resetting...':