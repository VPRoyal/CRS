import React, { useState, useRef } from 'react'
import styles from './complain.module.css'
import Select from '../Customs/Select'
export default function complain() {
    const [file, setFile] = useState();
    const [reset,setReset]=useState(0)
    const [section,setSection]=useState(0)
    const [submit, setSubmit]=useState(false)
    const Form =useRef()
    const handleReset=()=>{
        Form.current.reset()
        setReset((reset) => reset + 1)
        setFile(null)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(submit)
            return null
        setSubmit(true)
        // Here I have to put some validations and entry of required fields.
        var elem = Form.current.elements
        const data={
            id:"0034",
            studentId:"2019UMT1500",
            title:elem.title.value,
            type:elem.radio1.checked?"public":"private",
            section:section,
            activeOfficer:"ID of active officer",
            desc:elem.desc.value,
            file:file
        }
        handleReset()
        fetch('http://localhost:5000/complain/register/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())
            .then((data) => {
                setSubmit(false)
                console.log(data)
            })
            .catch((err) => {
                setSubmit(false)
                console.log(err.message);
            });
    }
    return (
        <div className={styles.wrapper} >
            <div className={styles.box} >
                <div className={styles.head} >
                    <h2>Lodge Your Complaint</h2>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg></span>
                </div>

                <form className={styles.form} ref={Form}>
                    <div className={styles.column} id={styles.title} >
                        <h3>Title</h3>
                        <input type='text' name="title" placeholder='Enter Title' />
                    </div>
                    <div className={styles.column} id={styles.type}>
                        <h3>Type of Complain</h3>
                        <div>
                            <label for="radio1">Private</label>
                            <input type="radio" id='radio1' name="type" />
                            <label for="radio2">Public</label>
                            <input type="radio" id='radio2' name="type" checked />
                        </div>

                    </div>
                    <div className={styles.column} id={styles.section}>
                        <h3>Concerned Section</h3>
                        <Select reset={reset} title="Add Section" type="A" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(val) => { setSection(val) }} />
                    </div>
                    <div className={styles.column} id={styles.description} >
                        <h3>Description</h3>
                        <textarea placeholder='Enter Description' name='desc'></textarea>
                    </div>
                    <div className={styles.column} id={styles.attachment}>
                        <h3>Any Document</h3>
                        <div>
                            <label for={styles.attach}>Select a file...</label>
                            <input onChange={(e) => { setFile(e.target.files[0]) }} type="file" name="" id={styles.attach} />
                        </div>
                        <div style={{ display: file ? "flex" : "none" }} >
                            <span onClick={() => { setFile(null) }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></span><span>Selected file: </span><span>{file ? file.name : ""}</span>
                        </div>
                    </div>
                </form>
                <div className={styles.button} >
                    <button onClick={handleSubmit} type="submit">{submit?"Submitting...":"Submit"}</button>
                    <button onClick={handleReset} type="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}
