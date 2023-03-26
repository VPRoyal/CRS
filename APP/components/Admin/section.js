import { useState, useRef } from 'react'
import axios from 'axios'
import styles from './section.module.css'
import Select from '../Customs/Select'
export default function section() {
  const departmentForm = useRef()
  const sectionForm = useRef()
  const [departID, setDepartID] = useState(null)
  // const [depart, setDepart]=useState(false)
  // const [sec, setSec]=useState(false)
  const handleReset = (e) => {
    var elem = e.target
    if (elem.name === "department")
      departmentForm.current.reset()
    else if (elem.name === "section") {
      sectionForm.current.reset()
      setDepartID(null)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    var elem = e.target
    const depart = departmentForm.current.elements
    const sec = sectionForm.current.elements
    var field = false
    if (elem.name === "department") field = true
    else if (elem.name !== "section") return
    elem.innerHTML="Submitting..."
    const department = {
      departID: field?depart.departID.value:departID,
      departName:field?depart.departName.value:"",
      departDescription: field?depart.description.value:"",
      section:[]
    }
    const section = {
      secID: field?depart.secID.value:sec.secID.value,
      secName: field?depart.secName.value:sec.secName.value,
      function: field?depart.function.value:sec.function.value
    }
    const data = {
      section: section,
      department: department,
      field: field ? "department" : "section"
    }
    axios.post('http://localhost:5000/department/',data)
      .then((res) => {
        elem.innerHTML="Submit"
      })
      .catch((err) => {
        elem.innerHTML="Submit"
      });

  }
  return (
    <div classNam
    
    e={styles.wrapper} >
      <div className={styles.box} >
        <div className={styles.head} >
          <h2>Add Department</h2>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill-add" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z" />
              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
            </svg>
          </span>
        </div>
        <form className={styles.form} ref={departmentForm} >
          <div className={styles.column} >
            <h4>Department Name</h4>
            <input type="text" name="departName" />
          </div>
          <div className={styles.column} >
            <h4>Section Name</h4>
            <input type="text" name="secName" />
          </div>
          <div className={styles.column} >
            <h4>Department ID</h4>
            <input type="text" name="departID" />
          </div>+
          <div className={styles.column} >
            <h4>Section ID</h4>
            <input type="text" name="secID" />
          </div>
          <div className={styles.column}>
            <h4>Department description</h4>
            <textarea rows="8" name='description' >Hi, this is vinay</textarea>
          </div>
          <div className={styles.column} >
            <h4>Section functions</h4>
            <textarea rows="8" name="function">Hi, this is vinay</textarea>
          </div>
        </form>
        <div className={styles.button} >
          <button type="submit" name='department' onClick={handleSubmit}>Submit</button>
          <button type="reset" name='department' onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className={styles.box} >
        <div className={styles.head} >
          <h2>Add Section</h2>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
            </svg>
          </span>
        </div>
        <form className={styles.form} ref={sectionForm} >
          <div className={styles.column} >
            <h4>Section Name</h4>
            <input type="text" name="secName" />
          </div>
          <div className={styles.column}>
            <h4>Section ID</h4>
            <input type="text" name="secID" />
          </div>
          <div className={styles.column}>
            <h4>Department</h4>
            <Select title="Add Section" type="A" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(val) => { setDepartID(val) }} />
          </div>
          <div className={styles.column}>
            <h4>Functions</h4>
            <textarea rows="8" name="function" >Hi, this is vinay</textarea>
          </div>
        </form>
        <div className={styles.button} >
          <button type="submit" name='section' onClick={handleSubmit} >Submit</button>
          <button type="reset" name='section' onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}


