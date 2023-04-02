import React, { useState, useEffect, useId } from 'react'
import styles from './select.module.css'
export default function Select({ type, title, options, databack, reset }) {
    const [IsCheck, setCheck] = useState(false)
    const id = useId()
    const [selection, setSelection] = useState(null)
    const handleClick = (e) => {
        e.preventDefault()
        var id=e.target.id, label=e.target.innerHTML
        if (e.target.tagName == "LI") {
            setCheck(false)
            if (label != selection) {
                setSelection(label)
                databack(id)
            }
        }
    }
    useEffect(() => {
        if (reset) {
            setSelection(null)
        }
    }, [reset]);
    return (
        <div className={styles.wrap} >
            <ul>
                <label>{selection && type === 'A' ? selection : title}</label>
                <input checked={IsCheck} onChange={(e) => { setCheck(e.target.checked) }} type="checkbox" className={styles.select} id={id} />
                <label htmlFor={id} className={styles.icons} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                </label></ul>
            <ul onClick={handleClick} style={{ display: IsCheck ? 'flex' : 'none' }} >
                {
                    options.map((val, index) => {
                        val = Object.values(val)
                        return (<li key={index} id={val[0]} name={val[1]} >{val[1]}</li>)
                    })
                }
            </ul>
        </div>
    )
}



// To use Reset just change reset prop in parent component using this -> SetReset((reset) => reset + 1)