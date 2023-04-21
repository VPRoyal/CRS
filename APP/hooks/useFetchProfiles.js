import axios from "axios";
import { useState, useEffect } from "react";
const useFetchProfiles = ( role,inactive,search, page = 1 ) => {
  const [isFetching, setFetching] = useState(false)
  const [data, setData] = useState({profile:[],maxPage:0})
  const [err, setErr] = useState(null)
  const fetch = async () => {
    setFetching(true)
    axios.get('http://localhost:5000/profile/', {
      params: {
        role:role,
        inactive:inactive,
        search:search,
        page: page
      }
    }).then((res) => {
      setData(res.data)
    }).catch((err) => {
      setErr({ name: err.name, message: err.message, code: err.code })
    }).finally(() => { setFetching(false) })
  }
  useEffect(() => {
     fetch()
  }, [role, page, inactive, search])
  return [isFetching, err, data.profile, data.maxPage]
}
export default useFetchProfiles;
