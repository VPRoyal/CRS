import styles from './searchBar.module.css'
var filters={
    inactive:false,
    role:[],
    search:""
}
export default function searchBar({ search }) {
    const handleChange = (e) => {
        const elem = e.target
        if (elem.name === "inactive") filters.inactive=elem.checked
        else if(elem.name ==="role") {
            if(elem.checked) filters.role=[ ...filters.role, elem.value ]
            else filters.role=filters.role.filter(role=>role!==elem.value)
        }
        else if(elem.name==="search") filters.search=elem.value
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <div className={styles.input}>
                    <input type="" name="search" placeholder='Name / ID' onChange={handleChange} />
                
                </div>
                <div className={styles.icon} onClick={()=>{search(filters)}} >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="-1 -1 17 17">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className={styles.filter} onChange={handleChange}  >
                <input type="checkbox" name='role' value="student" id={styles.type1} />
                <label className={styles.label} htmlFor={styles.type1}>Student</label>
                <input type="checkbox" name='role' value="staff" id={styles.type2} />
                <label className={styles.label} htmlFor={styles.type2}>Staff</label>
                <input type="checkbox" name='role' value="faculty" id={styles.type3} />
                <label className={styles.label} htmlFor={styles.type3}>Faculty</label>
                <input type="checkbox" name='inactive' value="active" id={styles.type4} />
                <label className={styles.label} htmlFor={styles.type4}>Inactive</label>
            </div>
        </div>
    )
}
