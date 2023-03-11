import styles from './user.module.css'
import Select from '../Customs/Select'
export default function user() {
    return (
        <div className={styles.wrapper} >
            <div className={styles.box} >
                <div className={styles.head} >
                    <h2>Add Authority</h2>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                    </span>
                </div>
                <form className={styles.form} >
                    <div className={styles.column}>
                        <h4>Name</h4>
                        <input type="text" />
                    </div>
                    <div className={styles.column}>
                        <h4>ID</h4>
                        <input type="text" />
                    </div>
                    <div className={styles.column}>
                        <h4>Email</h4>
                        <input type="text" />
                    </div>
                    <div className={styles.column}>
                        <h4>Mobile</h4>
                        <input type="text" />
                    </div>
                    <div className={styles.column}>
                        <h4>Department</h4>
                        <Select title="Add Section" type="A" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(val) => { console.log(val) }} />
                    </div>
                    <div className={styles.column}>
                        <h4>Post</h4>
                        <Select title="Add Section" type="A" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(val) => { console.log(val) }} />
                    </div>
                    <div className={styles.column}>
                        <h4>Section</h4>
                        <Select title="Add Section" type="A" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(val) => { console.log(val) }} />
                    </div>
                    <div className={styles.column}>
                        <h4>Reporting officer</h4>
                        <Select title="Add Section" type="A" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(val) => { console.log(val) }} />
                    </div>
                    <div className={styles.column}>
                        <h4>Level</h4>
                        <input type="text" name="" pattern='[1-4]{1}' onInput={(e) => { !e.target.validity.patternMismatch || (e.target.value = '') }} />
                    </div>
                </form>
                <div className={styles.button} >
                    <button type="submit">Save</button>
                    <button type="reset">Cancel</button>
                </div>
            </div>
        </div>
    )
}

