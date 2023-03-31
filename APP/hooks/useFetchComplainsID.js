import axios from "axios";
import { useState, useEffect } from "react";
const useFetchComplainsID = (page, limit = 10) => {
      const [isFetching, setFetching]=useState(false)
      const [data, setData]=useState(null)
      const [err, setErr]=useState(null)
      useEffect( ()=>{
            if(page<1) return 
            setFetching(true)
            axios.get('http://localhost:5000/complain', {
                  params: {
                        page: page,
                        limit: limit
                  }
            }).then((res)=>{
                  setData(res.data)
            }).catch((err) => {
                  setErr({name:err.name,message:err.message, code:err.code})
            }).finally(()=>{setFetching(false)} )
      },[page])
      return [data, err, isFetching]
}
export default useFetchComplainsID;
