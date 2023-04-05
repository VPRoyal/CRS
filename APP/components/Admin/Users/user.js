import styles from './user.module.css'
import UserCard from './userCard'
import UserUpdate from './userUpdate'
import SearchBar from './searchBar'
import { useState } from 'react'
export default function user() {
    const [view,setView]=useState(false)
    return (
        <div className={styles.wrapper} >
            <h2>Users</h2>
            <div className={styles.box} >
                <SearchBar/>
                <div className={styles.head} >
                    <div className={styles.item} ><span>Name</span></div>
                    <div className={styles.item} ><span>ID</span></div>
                    <div className={styles.item} ><span>Type</span></div>
                    <div className={styles.item} ><span>Post</span></div>
                    <div className={styles.item} ><span>Contact</span></div>
                    <div className={styles.item} ><span>Action</span></div>
                </div>
                <div className={styles.wrap} >
                    <UserCard view={view} databack={(view)=>{setView(view)}} />
                    <UserCard view={view} databack={(view)=>{setView(view)}} />
                    <UserCard view={view} databack={(view)=>{setView(view)}} />
                    <UserCard view={view} databack={(view)=>{setView(view)}} />
                </div>
                <div className={styles.footer}>
                <div className={styles.show} >
                    <span>Show More</span>
                    <span className={styles.icon} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg></span>
                </div>
                </div>
                {view && <UserUpdate onClose={()=>{setView(false)}} />}
            </div>
        </div>
    )
}
// reset={reset}
// reset={reset}
// reset={reset}
{/* <input type="" name="" value="" min="1" max="4" oninput="validity.valid||(value='');"/> */ }