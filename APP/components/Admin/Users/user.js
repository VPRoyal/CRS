import styles from './user.module.css'
import UserCard from './userCard'
import UserUpdate from './userUpdate'
import SearchBar from './searchBar'
import { useState } from 'react'
import useFetchProfiles from '../../../hooks/useFetchProfiles'
export default function user() {
    const [inactive, setInactive] = useState(false)
    const [page, setPage] = useState(1)
    const [role, setRole] = useState([])
    const [search, setSearch] = useState("")
    const [view, setView] = useState(false)
    const [viewID, setViewID]=useState(null)
    const [isFetching, err, profiles, maxPage] = useFetchProfiles(role, inactive, search, page)
    return (
        <div className={styles.wrapper} >
            <h2>Users</h2>
            <div className={styles.box} >
                <SearchBar search={(filter) => { setInactive(filter.inactive); setRole(filter.role); setSearch(filter.search) }} />
                <div className={styles.head} >
                    <div className={styles.item} ><span>Name</span></div>
                    <div className={styles.item} ><span>ID</span></div>
                    <div className={styles.item} ><span>Role</span></div>
                    <div className={styles.item} ><span>Post</span></div>
                    <div className={styles.item} ><span>Contact</span></div>
                    <div className={styles.item} ><span>Action</span></div>
                </div>
                <div className={styles.wrap} >
                    {profiles.map((item, index) => { return (<UserCard key={index} data={item} view={view} databack={(data) => { setView(data.view); setViewID(data.id) }} />) })}


                </div>
                <div className={styles.footer}>
                    <div className={styles.show} style={{ display: maxPage ? "flex" : "none" }} >
                        <span className={styles.icon} style={{ display: page <= 1 ? "none" : "flex" }} onClick={() => { page>1?setPage(page - 1):null }} ><svg width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg></span>
                        <span>{page} / {maxPage}</span>

                        <span className={styles.icon} style={{ display: page >= maxPage ? "none" : "flex" }} onClick={() => { page<maxPage?setPage(page + 1):null }} ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg></span>
                    </div>
                </div>
                {view && viewID &&<UserUpdate id={viewID} onClose={() => { setView(false); setViewID(null) }} />}
            </div>
        </div>
    )
}
// reset={reset}
// reset={reset}
// reset={reset}
{/* <input type="" name="" value="" min="1" max="4" oninput="validity.valid||(value='');"/> */ }