import axios from "axios";
import { useState, useEffect } from "react";
const URL=process.env.REACT_APP_APIURL
const useFetchComplainsID= (page=1, limit=10)=>{
      console.log("Hello",URL)
      useEffect(() => {
            axios.get(URL+'/complains/',{
                  params:{
                        page:page,
                        limit:limit
                  }
            })
            .then((res) => {
                  console.log(res)
            })
            .catch((err) => {
                  console.log(err)
            },[])
      })
      return null
}
export default useFetchComplainsID;
