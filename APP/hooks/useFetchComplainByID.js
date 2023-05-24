import axios from "axios";
import { useState, useEffect } from "react";
const useFetchComplainsByID = (id) => {
      const [isFetching, setFetching]=useState(false)
      const [data, setData]=useState(null)
      const [err, setErr]=useState(null)
      useEffect( ()=>{
            setFetching(true)
            axios.get('http://localhost:5000/complain/'+id, {
            }).then((res)=>{
                  setData(res.data)
            }).catch((err) => {
                  setErr({name:err.name,message:err.message, code:err.code})
            }).finally(()=>{setFetching(false)} )
      },[])
      return [data, err, isFetching]
}
export default useFetchComplainsByID;