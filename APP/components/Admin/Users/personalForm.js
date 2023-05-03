import { useEffect, useState} from 'react'
import styles from './userUpdate.module.css'
import Select from '../../Customs/Select'
import useFetchDivisions from '../../../hooks/useFetchDivisions'
import {ACTIONS} from '../../../state/userUpdateReducer'
export default function personalForm({profile, dispatch, state}) {
    // Objects
    const secObject={id:"",name:"",level: '',action:"add"}

    // Using Hooks---->>>>
    const [isFetching, division,err]=useFetchDivisions()
    const sections=division("section", profile.department)
    const departments=division()

    // Using State----->>>>>
    const [secObj, setSecObj]=useState(secObject)
    const [departEdit, setDepartEdit]=useState(false)

    // Initials ------>>>>

    const handleEditDepart=()=>{
        if(profile.activeSections.length)
            dispatch({type:ACTIONS.MESSAGE, payload:"First close all sections"})
        else setDepartEdit(true)
    }
    const handleAddSection=()=>{
        if(profile.department==="NA"){ 
            dispatch({type:ACTIONS.MESSAGE, payload:"First Add Department!"})
            setSecObj(secObject)
        }
        else if(secObj.id==="") dispatch({type:ACTIONS.MESSAGE, payload:"Please enter section!"})
        else if(secObj.level==="") dispatch({type:ACTIONS.MESSAGE, payload:"Please enter level!"})
        else if(profile.activeSections.findIndex(item=>item.id===secObj.id)!==-1) dispatch({type:ACTIONS.MESSAGE, payload:"Section already exists"})
        else if(!state.newSection||state.newSection.findIndex(item => item.id===secObj.id)==-1){
            dispatch({type:ACTIONS.ADD_NEW_SECTION, payload:secObj})
            dispatch({type:ACTIONS.MESSAGE, payload:""})
            setSecObj(secObject)
        }
    }
    const handleAddProfile=(name, val)=>{
        dispatch({type:ACTIONS.ADD_PROFILE, payload:{name:name, val:val}})
    }
    return (
        <div className={styles.profile} >
        <form className={styles.profileBox}  onChange={(e)=>{handleAddProfile(e.target.name, e.target.value)}} >
            <div className={styles.column}>
                <h4>Name</h4>
                <input type="text" name='name' defaultValue={profile.name} />
            </div>
            <div className={styles.column}>
                <h4>ID</h4>
                <input type="text" name='id' defaultValue={profile.id} disabled />
            </div>
            <div className={styles.column}>
                <h4>Email</h4>
                <input type="text" name='email' defaultValue={profile.contact.email}/>
            </div>
            <div className={styles.column}>
                <h4>Mobile</h4>
                <input type="text" name='phone' defaultValue={profile.contact.phone} />
            </div>
            <div className={styles.column}>
                <h4>Role</h4>
                <input type="text" name='role' defaultValue={profile.role} disabled />
            </div>
            <div className={styles.column}>
                <h4>Post</h4>
                <input type="text" name='post' defaultValue={profile.post} />
            </div>
            </form>
            <form className={styles.profileBox} >
            <div className={styles.column}>
                <h4>Section</h4>
                <div className={styles.ibox}>
                    <Select disabled={profile.department==="NA"} reset={secObj.id===""?true:false} title="Add Section" type="A" options={sections.sections} databack={(val) => { setSecObj({...secObj, id:val.id, name:val.name}) }} />
                    <span className={styles.level}><input type="text" name="" value={secObj.level}  placeholder='Level' pattern='[1-4]{1}' onChange={(e)=>{setSecObj({...secObj, level:e.target.value})}} onInput={(e) => { !e.target.validity.patternMismatch || (e.target.value = '') }} /></span>
                    <div className={styles.icons} onClick={handleAddSection} ><span>Add</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></span></div>
                </div>
            </div>
            <div className={styles.column}>
                <h4>Department</h4>
                <div className={styles.ibox}>
                    <Select disabled={!departEdit} reset={departEdit?false:true} title={sections?sections.departName:"NA"} type="A" options={departments} databack={(val) => { dispatch({type:ACTIONS.ADD_DEPARTMENT, payload:val.id})}} />
                    <div className={styles.icons} style={{display:departEdit?"flex":"none"}} onClick={()=>{setDepartEdit(false)}} ><span>Cancel</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></div>
                    <div className={styles.icons} onClick={handleEditDepart} style={{display:!departEdit?"flex":"none"}} ><span>Edit</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg></span></div>
                </div>
            </div>
        </form>
        </div>
    )
}
