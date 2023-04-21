import axios from "axios";
import { useState, useEffect } from "react";
const useFetchProfileByID = (id) => {
  const [isFetching, setFetching] = useState(false)
  const [profile, setProfile] = useState(null)
  const [err, setErr] = useState(null)
  const fetch = async () => {
    setFetching(true)
    axios.get(`http://localhost:5000/profile/${id}`)
    .then((res) => {
      setProfile(res.data)
    }).catch((err) => {
      setErr({ name: err.name, message: err.message, code: err.code })
    }).finally(() => { setFetching(false) })
  }
  useEffect(() => {
     fetch()
  }, [id])
  return [isFetching, err, profile]
}
export default useFetchProfileByID;